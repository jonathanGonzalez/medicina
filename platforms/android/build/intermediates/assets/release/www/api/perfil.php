<?php header('Access-Control-Allow-Origin: *'); ?>
<?php header('Access-Control-Allow-headers: Origin, X-Requested-with, content-type,accept');?>
<?php header('Access-Control-Allow-methods: POST, GET, OPTIONS, PUT');?>
<?php


//mysql
//mysqli
$data = json_decode(file_get_contents("php://input"));
$id_registro= ($data->id_registro);
$medicamentos= ($data->medicamentos);
$alergias = ($data->alergias);
$cirugias = ($data->cirugias);
$eps = ($data->eps);

$con = mysqli_connect('localhost', 'root', '','medicapp');

    $qry = 'INSERT INTO perfil VALUES (null, "' . $id_registro . '", "' . $medicamentos . '","' . $alergias. '","' . $cirugias. '","' . $eps . '")';
    $qry_res = mysqli_query($con,$qry);
    if ($qry_res) {
        $arr = array('msg' => "perfil actualizado!!!", 'error' => '');
        $jsn = json_encode($arr);
        print_r($jsn);
    } else {
        $arr = array('msg' => "", 'error' => 'error actualizando');
        $jsn = json_encode($arr);
        print_r($jsn);
    }

?>