<?php
declare(strict_types=1);

require_once __DIR__ . DIRECTORY_SEPARATOR . 'database.php';

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

$customerName = trim((string) ($payload['customerName'] ?? ''));
$customerPhone = trim((string) ($payload['customerPhone'] ?? ''));
$paymentMethod = trim((string) ($payload['paymentMethod'] ?? ''));
$user = $payload['user'] ?? null;
$items = $payload['items'] ?? null;

if (!is_array($user) || !is_array($items) || $customerName === '' || $customerPhone === '' || $paymentMethod === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Customer details, payment method, and cart items are required.',
    ]);
    exit;
}

$allowedPaymentMethods = ['card', 'upi', 'banking', 'cod'];
if (!in_array($paymentMethod, $allowedPaymentMethods, true)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Unsupported payment method.',
    ]);
    exit;
}

$userId = (int) ($user['id'] ?? 0);
$userEmail = strtolower(trim((string) ($user['email'] ?? '')));

$matchedUser = null;

try {
    $matchedUser = backend_find_user_by_id_and_email($userId, $userEmail);
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Server error: ' . $exception->getMessage(),
    ]);
    exit;
}

if ($matchedUser === null) {
    http_response_code(401);
    echo json_encode([
        'success' => false,
        'message' => 'Please log in again before placing your order.',
    ]);
    exit;
}

$normalizedItems = [];
$subtotal = 0;

foreach ($items as $item) {
    if (!is_array($item)) {
        continue;
    }

    $id = (int) ($item['id'] ?? 0);
    $title = trim((string) ($item['title'] ?? ''));
    $price = (float) ($item['price'] ?? 0);
    $quantity = (int) ($item['quantity'] ?? 0);
    $image = trim((string) ($item['image'] ?? ''));
    $category = trim((string) ($item['category'] ?? ''));

    if ($id <= 0 || $title === '' || $price <= 0 || $quantity <= 0) {
        continue;
    }

    $lineTotal = $price * $quantity;
    $subtotal += $lineTotal;

    $normalizedItems[] = [
        'id' => $id,
        'title' => $title,
        'price' => $price,
        'quantity' => $quantity,
        'category' => $category,
        'image' => $image,
        'line_total' => $lineTotal,
    ];
}

if ($normalizedItems === []) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Your cart is empty.',
    ]);
    exit;
}

$orderNumber = 'SG-' . strtoupper(bin2hex(random_bytes(4)));

$order = [
    'order_number' => $orderNumber,
    'user_id' => $matchedUser['id'],
    'user_email' => $matchedUser['email'],
    'customer_name' => $customerName,
    'customer_phone' => $customerPhone,
    'payment_method' => $paymentMethod,
    'payment_status' => $paymentMethod === 'cod' ? 'pending_on_delivery' : 'paid',
    'order_status' => 'processing',
    'subtotal' => $subtotal,
    'shipping' => 0,
    'total' => $subtotal,
    'items' => $normalizedItems,
    'created_at' => gmdate('c'),
];

try {
    $savedOrder = backend_create_order($order);
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Server error: ' . $exception->getMessage(),
    ]);
    exit;
}

echo json_encode([
    'success' => true,
    'message' => 'Order placed successfully.',
    'order' => [
        'id' => (int) $savedOrder['id'],
        'orderNumber' => $savedOrder['order_number'],
        'customerName' => $savedOrder['customer_name'],
        'paymentMethod' => $savedOrder['payment_method'],
        'paymentStatus' => $savedOrder['payment_status'],
        'total' => (float) $savedOrder['total'],
    ],
]);
