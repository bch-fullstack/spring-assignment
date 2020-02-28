<?php
$name = $_POST['name'];
$visitor_email = $_POST['mail'];
$visitor_phone = $_POST['phone'];
$message = $_POST['message'];

$email_from = "phamhavy171@gmail.com";
$email_subject = "New Form Submission";
$email_body = "User Name: $name.\n".
"User Phone: $phone.\n".
"User Email: $email.\n".
"User Message: $message.\n";

$to = "saigonnongmuonchet@gmail.com";
$headers = "From: $email_from \r\n";

$headers .= "From: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);
header("Location:index.html");

?>