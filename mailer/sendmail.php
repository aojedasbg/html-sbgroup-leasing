<?php

header('Content-Type: text/html; charset=UTF-8');

$name = isset($_POST['name']) ? $_POST['name'] : "-";
$last = isset($_POST['last']) ? $_POST['last'] : "-";
$email = isset($_POST['email']) ? $_POST['email'] : "-";
$phone = isset($_POST['phone']) ? $_POST['phone'] : "-";
$contacto = isset($_POST['contacto']) ? $_POST['contacto'] : "-";
$acepto = isset($_POST['acepto']) ? $_POST['acepto'] : "-";
$monto = isset($_POST['monto']) ? $_POST['monto'] : "-";
$activo = isset($_POST['activo']) ? $_POST['activo'] : "-";
$historial = isset($_POST['historial']) ? $_POST['historial'] : "-";
$ventas = isset($_POST['ventas']) ? $_POST['ventas'] : "-";
$gobierno = isset($_POST['gobierno']) ? $_POST['gobierno'] : "-";
$cliente = isset($_POST['cliente']) ? $_POST['cliente'] : "-";
$empresa = isset($_POST['empresa']) ? $_POST['empresa'] : "-";
$utilidades = isset($_POST['utilidades']) ? $_POST['utilidades'] : "-";

	
	$fecha = date("Y/m/d");
	$sender = "SB Leasing | Solicita tu arrendamiento";
	
	$message = "----------\n<br/> Fecha: $fecha \n<br/> Enviado desde: $sender\n<br/> \n<br/> 
	Datos personales \n<br/> 
	Nombre(s): $name \n<br/> 
	Primer apellido: $last \n<br/> 
	Correo electronico: $email \n<br/> 
	Telefono/Celular: $phone \n<br/> 
	Metodo de contacto preferido: $contacto \n<br/> 
	He leido y acepto los terminos y condiciones asi como el aviso de privacidad: $acepto \n<br/> \n<br/> 
	Datos de la empresa \n<br/> 
	Que monto necesitas?: $monto \n<br/> 
	Que tipo de activo necesitas?: $activo \n<br/> 
	Como es tu historial crediticio?: $historial \n<br/> 
	Cuales son tus ventas anuales?: $ventas \n<br/> 
	Que porcentaje de tu facturacion es a dependencias de gobierno? $gobierno \n<br/> 
	Que porcentaje de tu facturacion es a tu principal cliente? $cliente \n<br/> 
	Antiguedad de la empresa $empresa \n<br/> 
	La tendencia de utilidades es creciente? $utilidades \n<br/> \n\n";
	
	$Support_mail = "rodsaucedo@sbgroup.com.mx"; 
	
	require_once('class.phpmailer.php');
	include("class.smtp.php"); //Optional, gets called from within class.phpmailer.php if not already loaded
	
	$mail = new PHPMailer();
	$body = $message;
	$subject = "SB Leasing | Solicita tu arrendamiento";
	
	//Gmail
	$mail->IsSMTP(); //Telling the class to use SMTP
	$mail->SMTPDebug = 1; //Enables SMTP debug information (for testing), 1 = errors and messages, 2 = messages only
	$mail->SMTPAuth = "smtp.gmail.com"; //Enable SMTP authentication
	$mail->SMTPSecure = "ssl"; //Protocol
	$mail->Host = "smtp.gmail.com"; //Sets the SMTP server
	$mail->Port = 465; //Set the SMTP port for the gmail server
	$mail->IsHTML(true);
	$mail->Username = "pruebaslumston@gmail.com"; //SMTP account username
	$mail->Password = "Jarrito2020"; //SMTP account password
	$mail->SetFrom("pruebaslumston@gmail.com", "SB Leasing | Solicita tu arrendamiento");
	$mail->From = "pruebaslumston@gmail.com";
	$mail->AddReplyTo($email);
	$mail->Subject = $subject;
	$mail->AltBody = $subject; //Optional, comment out and test
	$mail->MsgHTML($message);
	//$mail->AddAddress($email); //Send a copy to the sender
	
	//mail to Support
	$mail->AddAddress($Support_mail, "SB Leasing | Solicita tu arrendamiento");
	
	$res = $mail->Send();
	//var_dump($res);
