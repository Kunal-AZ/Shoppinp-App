<?php
declare(strict_types=1);

function backend_env(string $key, ?string $default = null): ?string
{
    $value = getenv($key);

    if ($value === false || $value === '') {
        return $default;
    }

    return $value;
}

function backend_config(): array
{
    return [
        'db_host' => backend_env('DB_HOST', '127.0.0.1'),
        'db_port' => backend_env('DB_PORT', '5432'),
        'db_name' => backend_env('DB_NAME', 'sitara_grace'),
        'db_user' => backend_env('DB_USER', 'postgres'),
        'db_password' => backend_env('DB_PASSWORD', ''),
        'storage_path' => backend_env('MESSAGE_STORAGE_PATH', __DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'database' . DIRECTORY_SEPARATOR . 'contact_messages.json'),
        'users_storage_path' => backend_env('USERS_STORAGE_PATH', __DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'database' . DIRECTORY_SEPARATOR . 'users.json'),
        'orders_storage_path' => backend_env('ORDERS_STORAGE_PATH', __DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'database' . DIRECTORY_SEPARATOR . 'orders.json'),
    ];
}
