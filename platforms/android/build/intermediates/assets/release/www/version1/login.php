<?php

?>
<?php header('Access-Control-Allow-Origin: *'); ?>
<?php header('Access-Control-Allow-headers: Origin, X-Requested-with, content-type,accept');?>
<?php header('Access-Control-Allow-methods: POST, GET, OPTIONS, PUT');?>
<?php

//mysqli
$data = json_decode(file_get_contents("php://input"));
$correo= ($data->correo);
$password = ($data->password);

//
$con = mysqli_connect('localhost', 'root', '','medicapp') or die(mysql_error());

$log = mysql_query("SELECT * FROM registro WHERE correo='$correo' AND password='$password'");
				if (mysql_num_rows($log)>0) {
					$row = mysql_fetch_array($log);
					$_SESSION["nombre"] = $row['nombre']; 
				  	echo 'Iniciando sesión para '.$_SESSION['nombre'].' <p>';
					echo '<script> window.location.href="#/app/main"; </script>';
				}
else {
    echo "<script language='JavaScript'>alert('error al conectar con la cuenta del usuario')</script>";
    
}

?>