<?php
//设置编码
header('content-type:text/html;charset=utf-8');
//连接数据库
include 'main.php';

$username = isset($_POST['username'])?$_POST['username']:'';
$email = isset($_POST['mail'])?$_POST['mail']:'';

//查找是否数据库相同的数据
$sql1 = "SELECT * FROM register_library WHERE username='$username'";
$sql2 = "SELECT * FROM register_library WHERE email='$email'";

//执行语句
$res1 = $connect->query($sql1);
$res2 = $connect->query($sql2);


$summary = array(
    'name'=> $res1->num_rows,
    'e-mail'=> $res2->num_rows
);

echo json_encode($summary,JSON_UNESCAPED_UNICODE);
?>