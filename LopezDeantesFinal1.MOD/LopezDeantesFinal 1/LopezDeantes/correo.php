<?php 

//Obtengo los datos 
$nombre_persona = $_POST['nombre'];
$correo_persona = $_POST['correo'];
$telefono_persona = $_POST['telefono'];
$asunto_persona = $_POST['asunto'];


$nombre='$nombre_persona';
$micorreo='info@lopezdeantes.com.mx'; 

    $cabecera = 'From: '.$nombre_persona."\r\n". 
                'Reply-to: '.$mail."\r\n". 
                'Mime-Version:1.0'."\r\n". 
                '"Content-Type: text/plain'."\r\n".                 
                'X-Mailer: PHP/'.phpversion(); 

    $para =	   $micorreo ; // Mi casilla de correo 

    $asunto =  "Contactando desde la página"; 
     
    $mensaje = "Mensaje de:".$nombre_persona."\r\n". 
               "Direccion de correo:".$correo_persona."\r\n".
               "Telefono de:".$telefono_persona."\r\n".
               "Mensaje: ".$asunto_persona; 
     
     
    //enviar Mail    
    //mail('a','asunto','mensaje') 
	
    $enviado = mail($para,$asunto,utf8_decode($mensaje),$cabecera); 

    if($enviado){    	
    	echo "<script type='text/javascript'>alert('Tu mensaje ha sido enviado exitosamente');</script>";
        echo "<script type='text/javascript'>window.location.href='http://www.lopezdeantes.com.mx/quienessomos.html#contacto';</script>";
    }else{
    	echo "Su mensaje No ha sido enviado exitosamente"; 
    
   }
  
?> 	