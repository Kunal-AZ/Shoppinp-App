<?php
declare(strict_types=1);

require_once __DIR__ . DIRECTORY_SEPARATOR . 'config.php';

function backend_read_json_file(string $path): array
{
    if (!is_file($path)) {
        return [];
    }

    $decoded = json_decode((string) file_get_contents($path), true);
    return is_array($decoded) ? $decoded : [];
}

function backend_write_json_file(string $path, array $records): void
{
    $directory = dirname($path);
    if (!is_dir($directory) && !mkdir($directory, 0777, true) && !is_dir($directory)) {
        throw new RuntimeException('Unable to create storage directory.');
    }

    $encoded = json_encode($records, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    if ($encoded === false) {
        throw new RuntimeException('Unable to encode storage payload.');
    }

    if (file_put_contents($path, $encoded . PHP_EOL, LOCK_EX) === false) {
        throw new RuntimeException('Unable to write storage payload.');
    }
}

function backend_users_storage_path(): string
{
    $config = backend_config();
    return $config['users_storage_path'];
}

function backend_orders_storage_path(): string
{
    $config = backend_config();
    return $config['orders_storage_path'];
}
