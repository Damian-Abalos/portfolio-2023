<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $destinatario = "damianabalos94@gmail.com";
    $asunto = "Mensaje de contacto de $nombre";
    $cuerpoMensaje = "Nombre: $name\nEmail: $email\nMensaje:\n$message";

    if (mail($destinatario, $asunto, $cuerpoMensaje)) {
        echo "Mensaje enviado con éxito.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>