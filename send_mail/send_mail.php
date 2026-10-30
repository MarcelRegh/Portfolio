<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: POST");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    exit;
}

$json = file_get_contents('php://input');
$params = json_decode($json);

if (!$params || empty(trim($params->name ?? '')) ||
    empty(trim($params->email ?? '')) ||
    empty(trim($params->message ?? ''))) {
    http_response_code(400);
    echo "Name, email and message are required";
    exit;
}

$name = trim($params->name);
$email = trim($params->email);
$message = trim($params->message);

$recipient = 'metyxs@gmail.com';
$subject = "Contact from $name <$email>";
$headers = [
    'From: noreply@marcelregh.net',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8'
];

if (!mail($recipient, $subject, $message, implode("\r\n", $headers))) {
    http_response_code(502);
    echo "The local mail service could not send the message";
    exit;
}

echo "Message sent";
