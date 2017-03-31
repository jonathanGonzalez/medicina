<?php 
    include("Conexion.php");
    $data = json_decode(file_get_contents("php://input"));
    $password = $data->password;
    $username = $data->username;

    $userInfo = $db->query("SELECT id FROM registro WHERE correo='$username' AND password='$password'");
    $userInfo = $userInfo->fetchAll();

    echo json_encode($userInfo);
	

?>