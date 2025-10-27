<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "vendor/autoload.php";


if($_SERVER['REQUEST_METHOD']=="POST"){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $mail = new PHPMailer(true);
    $reply = new PHPMailer(true);

    // sql---------------------------------------||
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "my_storedb";

    $conn = new mysqli($host, $username, $password, $dbname);

    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO table_form (name, email, subject, message) VALUES (?, ?, ?, ?)");

    if($stmt === false){
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("ssss", $name, $email, $subject, $message);

    if($stmt->execute()){
        echo "New record created successfully";
    }else{
        echo "Error: " . $stmt->error . "<br";
    }

    $stmt->close();
    
    // ---------------------------------------||


    try {
        $mail -> isSMTP();
        $mail -> Host = "smtp.gmail.com";
        $mail -> SMTPAuth = true;
        $mail -> Username = "mebronquillo@tip.edu.ph";
        $mail -> Password = "kchd eeuu czex qult";
        $mail -> SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail -> Port = 587;

        $mail -> setFrom($email, $name); //name that input or make it fix text name
        $mail -> addAddress("mebronquillo@tip.edu.ph", "edward");

        $mail -> Subject = "New Contact Form Submission";
        $mail -> Body = "Name: $name\n".
                        "Email: $email\n".
                        "Subject: $subject\n".
                        "Message: $message";
        if($mail -> send()){
            header("Location: send.html");
        }else{
            echo "Message could not be sent, Error: " . $mail->ErrorInfo; 
        }

        $reply -> isSMTP();
        $reply -> Host = "smtp.gmail.com";
        $reply -> SMTPAuth = true;
        $reply -> Username = "mebronquillo@tip.edu.ph";
        $reply -> Password = "kchd eeuu czex qult";
        $reply -> SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $reply -> Port = 587;

        $reply -> setFrom($email, $name); 
        $reply -> addAddress($email, $name);//Reply to sender email
        $reply -> Subject = "Thank you for contacting me";
        $reply -> Body = "Dear $name,\n\n".
                         "Thank you for reaching out to me. I have received your message and will get back to you as soon as possible.\n\n".
                         "Best regards,\n".
                         "Edward Bronquillo";
        $reply -> send();


    } catch (Exception $e) {
        echo "Message could not be sent, Error: " . $mail->ErrorInfo; 
    }
        
}

?>