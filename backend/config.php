<?php
declare(strict_types=1);

function backend_load_env_file(string $path): void
{
    static $loaded = [];

    if (isset($loaded[$path]) || !is_file($path)) {
        return;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $line) {
        $trimmedLine = trim($line);
        if ($trimmedLine === '' || str_starts_with($trimmedLine, '#') || !str_contains($trimmedLine, '=')) {
            continue;
        }

        [$key, $value] = explode('=', $trimmedLine, 2);
        $key = trim($key);
        $value = trim($value);

        if ($key === '' || getenv($key) !== false) {
            continue;
        }

        putenv($key . '=' . $value);
        $_ENV[$key] = $value;
        $_SERVER[$key] = $value;
    }

    $loaded[$path] = true;
}

function backend_env(string $key, ?string $default = null): ?string
{
    backend_load_env_file(__DIR__ . DIRECTORY_SEPARATOR . '.env');

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
        'db_name' => backend_env('DB_NAME', 'myproject_db'),
        'db_user' => backend_env('DB_USER', 'postgres'),
        'db_password' => backend_env('DB_PASSWORD', ''),
    ];
}
