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

function backend_storage_path(): string
{
    $config = backend_config();
    return $config['storage_path'];
}

function backend_store_message_locally(array $message): void
{
    $storagePath = backend_storage_path();
    $storageDir = dirname($storagePath);

    if (!is_dir($storageDir) && !mkdir($storageDir, 0777, true) && !is_dir($storageDir)) {
        throw new RuntimeException('Unable to create local storage directory.');
    }

    $existingMessages = [];
    if (is_file($storagePath)) {
        $decoded = json_decode((string) file_get_contents($storagePath), true);
        if (is_array($decoded)) {
            $existingMessages = $decoded;
        }
    }

    $existingMessages[] = [
        'id' => count($existingMessages) + 1,
        'name' => $message['name'],
        'email' => $message['email'],
        'phone' => $message['phone'],
        'message' => $message['message'],
        'created_at' => gmdate('c'),
    ];

    $encoded = json_encode($existingMessages, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    if ($encoded === false) {
        throw new RuntimeException('Unable to encode contact message payload.');
    }

    if (file_put_contents($storagePath, $encoded . PHP_EOL, LOCK_EX) === false) {
        throw new RuntimeException('Unable to write contact message to local storage.');
    }
}

function backend_store_message(array $message): void
{
    $connection = backend_database_connection();
    if ($connection instanceof PDO) {
        $statement = $connection->prepare(
            'INSERT INTO contact_messages (name, email, phone, message)
             VALUES (:name, :email, :phone, :message)'
        );

        $statement->execute([
            ':name' => $message['name'],
            ':email' => $message['email'],
            ':phone' => $message['phone'],
            ':message' => $message['message'],
        ]);
        return;
    }

    backend_store_message_locally($message);
}
