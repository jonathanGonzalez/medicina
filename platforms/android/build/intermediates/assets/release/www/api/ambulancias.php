<?php header('Access-Control-Allow-Origin: *'); ?>
<?php header('Access-Control-Allow-headers: Origin, X-Requested-with, content-type,accept');?>
<?php header('Access-Control-Allow-methods: POST, GET, OPTIONS, PUT');?>
<?php


//mysql
//mysqli
$data = json_decode(file_get_contents("php://input"));
$idUsuario = ($data->idUsuario);
$fecha = ($data->fecha);
$hora = ($data->hora);
$lugar = ($data->lugar);
$descripcion = ($data->descripcion);
//
$con = mysqli_connect('localhost', 'root', '','medicapp');

//****************************
$sql = 'SELECT * FROM registro WHERE id ="' . $idUsuario . '"';
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_assoc($result);
$nombre = $row['nombres'];
$tipo = $row['tipo'];
$documento = $row['documento'];
$telefono = $row['telefono'];
$correo = $row['correo'];


//*********************************

 $qry = 'INSERT INTO ambulancias VALUES (null, "' . $idUsuario . '", "' . $fecha . '", "' . $hora . '", "' . $lugar . '", "' . $descripcion.'")';
    $qry_res = mysqli_query($con,$qry);
    if ($qry_res) {
        $arr = array('msg' => "Su Consulta está en proceso de aprovación, le contactaremos pronto!!!", 'error' => '');
        $jsn = json_encode($arr);
        print_r($jsn);
    } else {
        $arr = array('msg' => "", 'error' => 'error actualizando');
        $jsn = json_encode($arr);
        print_r($jsn);
    }
?>