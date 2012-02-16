<?php
$nombre = $_GET['nombre'];
$mail_envio = $_GET['email'];
$asunto = $_GET['asunto'];
$cuerpo = $_GET['cuerpo'];

$salida = Array();
$emailBase = 'info@lurgatika.com';
$emailErrores = 'jorge.garcia@sarenet.es';
$emailEnvio = 'jorge.garcia@sarenet.es';

$html = "Nombre : ·$nombre<br>\n";
$html .= "Email contacto: $mail_envio<br>\n";
$html .= "Asunto: $asunto<br>\n";
$html .= "Texto: $cuerpo<br>\n";

$asuntoEmail = "Petición de información desde la APP de parte de $nombre";
$headers = "From: $emailBase\n";
$headers .= "Sender: $emailBase\n";
$headers .= "Reply-To: $emailBase\n";
$headers .= "Content-Type: text/html; charset=iso-8859-1\n";
$headers .= "Errors-to:$emailErrores\n";
if(mail($emailEnvio,$asuntoEmail,$html,$headers,"-f$emailErrores")){	
	$salida['estado'] = 'OK';
	$salida['mensaje'] = utf8_encode('E-mail enviado correctamente');
}else{
	$salida['estado'] = 'KO';
	$salida['mensaje'] = utf8_encode('Hay algún problema con el envío del e-mail. E-mail no enviado');
}
echo json_encode($salida);

?>
