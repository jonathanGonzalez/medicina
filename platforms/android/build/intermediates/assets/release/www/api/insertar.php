<?php header('Access-Control-Allow-Origin: *'); ?>
<?php header('Access-Control-Allow-headers: Origin, X-Requested-with, content-type,accept');?>
<?php header('Access-Control-Allow-methods: POST, GET, OPTIONS, PUT');?>
<?php


//mysql
//mysqli
$data = json_decode(file_get_contents("php://input"));
$nombres= ($data->nombres);
$apellidos = ($data->apellidos);
$sexo = ($data->sexo);
$tipo = ($data->tipo);
$documento = ($data->documento);
$nacimiento = ($data->nacimiento);
$telefono = ($data->telefono);
$correo = ($data->correo);
$password = ($data->password);
$terminos = ($data->terminos);
//
$con = mysqli_connect('localhost', 'root', '','medicapp') or die(mysql_error());

$qry_em = 'select count(*) as cnt from registro where correo ="' . $correo . '"';
$qry_res = mysqli_query($con, $qry_em);
$res = mysqli_fetch_assoc($qry_res);

if ($res['cnt'] == 0) {
    $qry = 'INSERT INTO registro VALUES (null, "' . $nombres . '","' . $apellidos. '","' . $sexo. '","' . $tipo . '","' . $documento . '","' . $nacimiento . '","' . $telefono . '","' . $correo . '","' . $password. '","' . $terminos. '")';
    $qry_res = mysqli_query($con,$qry);
    if ($qry_res) {
        $arr = array('msg' => "usuario creado!!!", 'error' => '');
        $jsn = json_encode($arr);
        print_r($jsn);
    } else {
        $arr = array('msg' => "", 'error' => 'error insertando');
        $jsn = json_encode($arr);
        print_r($jsn);
    }
} else {
    $arr = array('msg' => "", 'error' => 'usuario ya existe');
    $jsn = json_encode($arr);
    print_r($jsn);
}

?>