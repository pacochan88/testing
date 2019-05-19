<?php
//设置编码
header('content-type:text/html;charset=utf-8');
//连接数据库
include 'main.php';

$phone = isset($_GET['phone']) ? $_GET['phone'] : '';
//查找是否数据库相同的数据
$sql1 = "SELECT * FROM register_library WHERE phone='$phone'";
//执行语句
$res1 = $connect->query($sql1);
//返回值
echo $res1->num_rows;
?>