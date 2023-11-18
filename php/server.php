<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve data from the POST request
    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Set recipient email address
    $to = "recipient_email@example.com"; // Replace with the recipient's email address

    // Set email subject
    $subject = "Contact Form Submission";

    // Compose the email message
    $messageBody = "Full Name: $fullname\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Phone: $phone\n";
    $messageBody .= "Message:\n$message";

    // Additional headers
    $headers = "From: $email" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    // Attempt to send the email
    if (mail($to, $subject, $messageBody, $headers)) {
        // Email sent successfully
        echo "Email sent successfully!";
    } else {
        // Email sending failed
        echo "Error sending email.";
    }
} else {
    // If the script is accessed directly, return an error
    echo "Invalid request.";
}
?>