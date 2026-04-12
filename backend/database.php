<?php
declare(strict_types=1);

require_once __DIR__ . DIRECTORY_SEPARATOR . 'config.php';

function backend_has_pdo_driver(string $driver): bool
{
    if (!class_exists('PDO')) {
        return false;
    }

    return in_array($driver, PDO::getAvailableDrivers(), true);
}

function backend_database_connection(): ?PDO
{
    static $pdo = false;

    if ($pdo instanceof PDO) {
        return $pdo;
    }

    if ($pdo === null) {
        return null;
    }

    $config = backend_config();
    if (!backend_has_pdo_driver('pgsql')) {
        $pdo = null;
        return null;
    }

    $dsn = sprintf('pgsql:host=%s;port=%s;dbname=%s', $config['db_host'], $config['db_port'], $config['db_name']);

    $pdo = new PDO(
        $dsn,
        $config['db_user'],
        $config['db_password'],
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );

    return $pdo;
}

function backend_require_database_connection(): PDO
{
    $connection = backend_database_connection();
    if ($connection instanceof PDO) {
        return $connection;
    }

    throw new RuntimeException('PostgreSQL connection is unavailable. Enable the pdo_pgsql extension and verify backend/.env database settings.');
}

function backend_store_message(array $message): void
{
    $statement = backend_require_database_connection()->prepare(
        'INSERT INTO contact_messages (name, email, phone, message)
         VALUES (:name, :email, :phone, :message)'
    );

    $statement->execute([
        ':name' => $message['name'],
        ':email' => $message['email'],
        ':phone' => $message['phone'],
        ':message' => $message['message'],
    ]);
}

function backend_find_user_by_email(string $email): ?array
{
    $statement = backend_require_database_connection()->prepare(
        'SELECT id, name, email, password_hash, created_at
         FROM users
         WHERE email = :email
         LIMIT 1'
    );
    $statement->execute([':email' => $email]);

    $user = $statement->fetch();
    return is_array($user) ? $user : null;
}

function backend_create_user(string $name, string $email, string $password): array
{
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);
    if ($passwordHash === false) {
        throw new RuntimeException('Unable to secure the account password.');
    }

    $statement = backend_require_database_connection()->prepare(
        'INSERT INTO users (name, email, password_hash)
         VALUES (:name, :email, :password_hash)
         RETURNING id, name, email, created_at'
    );
    $statement->execute([
        ':name' => $name,
        ':email' => $email,
        ':password_hash' => $passwordHash,
    ]);

    $user = $statement->fetch();
    if (!is_array($user)) {
        throw new RuntimeException('Unable to create the user account.');
    }

    return $user;
}

function backend_find_user_by_id_and_email(int $userId, string $email): ?array
{
    $statement = backend_require_database_connection()->prepare(
        'SELECT id, name, email, password_hash, created_at
         FROM users
         WHERE id = :id AND email = :email
         LIMIT 1'
    );
    $statement->execute([
        ':id' => $userId,
        ':email' => $email,
    ]);

    $user = $statement->fetch();
    return is_array($user) ? $user : null;
}

function backend_create_order(array $order): array
{
    $connection = backend_require_database_connection();
    $statement = $connection->prepare(
        'INSERT INTO orders (
            order_number,
            user_id,
            user_email,
            customer_name,
            customer_phone,
            payment_method,
            payment_status,
            order_status,
            subtotal,
            shipping,
            total,
            items
        ) VALUES (
            :order_number,
            :user_id,
            :user_email,
            :customer_name,
            :customer_phone,
            :payment_method,
            :payment_status,
            :order_status,
            :subtotal,
            :shipping,
            :total,
            :items::jsonb
        )
        RETURNING id, order_number, user_id, user_email, customer_name, customer_phone, payment_method, payment_status, order_status, subtotal, shipping, total, created_at'
    );

    $itemsJson = json_encode($order['items'], JSON_UNESCAPED_SLASHES);
    if ($itemsJson === false) {
        throw new RuntimeException('Unable to encode order items.');
    }

    $statement->execute([
        ':order_number' => $order['order_number'],
        ':user_id' => $order['user_id'],
        ':user_email' => $order['user_email'],
        ':customer_name' => $order['customer_name'],
        ':customer_phone' => $order['customer_phone'],
        ':payment_method' => $order['payment_method'],
        ':payment_status' => $order['payment_status'],
        ':order_status' => $order['order_status'],
        ':subtotal' => $order['subtotal'],
        ':shipping' => $order['shipping'],
        ':total' => $order['total'],
        ':items' => $itemsJson,
    ]);

    $savedOrder = $statement->fetch();
    if (!is_array($savedOrder)) {
        throw new RuntimeException('Unable to save the order.');
    }

    $savedOrder['items'] = $order['items'];
    return $savedOrder;
}
