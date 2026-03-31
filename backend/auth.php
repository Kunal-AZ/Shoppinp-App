<?php
declare(strict_types=1);

require_once __DIR__ . DIRECTORY_SEPARATOR . 'storage.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Only POST requests are allowed.',
    ]);
    exit;
}

$payload = json_decode((string) file_get_contents('php://input'), true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid JSON payload.',
    ]);
    exit;
}

$action = trim((string) ($payload['action'] ?? ''));
$name = trim((string) ($payload['name'] ?? ''));
$email = strtolower(trim((string) ($payload['email'] ?? '')));
$password = (string) ($payload['password'] ?? '');

if (!in_array($action, ['register', 'login'], true)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid authentication action.',
    ]);
    exit;
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $password === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'A valid email and password are required.',
    ]);
    exit;
}

$users = backend_read_json_file(backend_users_storage_path());

if ($action === 'register') {
    if ($name === '') {
        http_response_code(422);
        echo json_encode([
            'success' => false,
            'message' => 'Your full name is required.',
        ]);
        exit;
    }

    foreach ($users as $user) {
        if (($user['email'] ?? '') === $email) {
            http_response_code(409);
            echo json_encode([
                'success' => false,
                'message' => 'An account with this email already exists.',
            ]);
            exit;
        }
    }

    $newUser = [
        'id' => count($users) + 1,
        'name' => $name,
        'email' => $email,
        'password_hash' => password_hash($password, PASSWORD_DEFAULT),
        'created_at' => gmdate('c'),
    ];

    $users[] = $newUser;
    backend_write_json_file(backend_users_storage_path(), $users);

    echo json_encode([
        'success' => true,
        'message' => 'Account created successfully.',
        'user' => [
            'id' => $newUser['id'],
            'name' => $newUser['name'],
            'email' => $newUser['email'],
        ],
    ]);
    exit;
}

foreach ($users as $user) {
    if (($user['email'] ?? '') !== $email) {
        continue;
    }

    if (!password_verify($password, (string) ($user['password_hash'] ?? ''))) {
        break;
    }

    echo json_encode([
        'success' => true,
        'message' => 'Login successful.',
        'user' => [
            'id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email'],
        ],
    ]);
    exit;
}

http_response_code(401);
echo json_encode([
    'success' => false,
    'message' => 'Incorrect email or password.',
]);
