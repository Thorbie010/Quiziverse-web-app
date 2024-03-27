<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'jonahemmanuel54@@gmail.com'; 
    $subject = 'New Contact Form Submission';
    $message = 'Name: ' . $name . "\n" .
               'Email: ' . $email . "\n" .
               'Message: ' . $message;

    $headers = 'From: ' . $email . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo 'Your message has been sent successfully.';
    } else {
        echo 'Sorry, there was an error sending your message.';
    }
}
?>
