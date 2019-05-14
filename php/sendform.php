<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Form, confirmation d'envoi</title>
</head>
<body>
    <p>
        
    <?php
    
    $nom= $_POST['surname'];
    $prenom= $_POST['firstname'];
    $anniversaire= $_POST['birthday'];
    $genre= $_POST['gender'];
    $email= $_POST['email'];
    $message= $_POST['message'];
    
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .='From: '.$email." ". "\r\n".
                'Content-Type: text/plain; charset="utf-8"'."\r\n".
                'Content-Transfer-Encoding: 8bit';
    $mailtxt= "
            Formulaire de contact:
            
            Nom: ".$nom."
            Prenom: ".$prenom."
            Anniversaire: ".$anniversaire."
            Genre: ".$genre."
            Email: ".$email."
            Message: ".$message."
              ";
    $retour=mail('dcl.quentind@18pixel.fr', "Envoi d'un formulaire", $mailtxt , $headers);
    if($retour)
        echo 'Votre formulaire de contact a bien été envoyé';
    else 
        echo "Erreur lors de l'envoi du formulaire, veuillez réessayer.";
    ?>
    </p>
</body>
</html>