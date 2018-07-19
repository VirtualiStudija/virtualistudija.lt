<?php

    header('Content-Type: application/json');
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';

    $vardas = $_POST['vardas'];
    $email = $_POST['email'];
    $zinute = $_POST['zinute'];

    $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
    try {
        //Kalba
        $mail->CharSet  = 'UTF-8';;
        
        //Serverio nustatymai
        $mail->SMTPDebug = 0;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'jaguaras.serveriai.lt';                // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'info@virtualistudija.lt';          // SMTP username
        $mail->Password = 'KirapauksciaiKirapauksciai';       // SMTP password
        $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465;                                    // TCP port to connect to

        //Siuntėjas
        $mail->setFrom($email, $vardas);
        $mail->addAddress('info@virtualistudija.lt', 'Naujas klientas');     // Add a recipient
        $mail->addReplyTo($email, 'Atsakymas');

        //Zinutė
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Laiškas iš kontaktų formos';
        $mail->Body    = $zinute;

        if($mail->send()) {
            echo json_encode(array('success' => true));
        };
        
    } catch (Exception $e) {
        echo 'Įvyko klaida: ', $mail->ErrorInfo;
    }

?>