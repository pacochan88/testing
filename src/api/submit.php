<?php
//设置编码
header('content-type:text/html;charset=utf-8');
//连接数据库
include 'main.php';

$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$username = isset($_POST['username'])?$_POST['username']:'';
$pwd = isset($_POST['password'])?$_POST['password']:'';
$email = isset($_POST['mail'])?$_POST['mail']:'';

$sql1 ="INSERT INTO register_library(phone,username,pwd,email) VALUES('$phone','$username','$pwd','$email')";
//执行语句
$res = $connect->query($sql1);


if($res){
    echo 1;
}

?>