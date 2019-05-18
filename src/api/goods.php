<?php
//设置编码
header('content-type:text/html;charset=utf-8');
//连接数据库
include 'main.php';

$id = isset($_GET['id']) ? $_GET['id'] : '';

$sql = "SELECT * FROM list_data WHERE id='$id'";
//获取查询结果
$result = $connect->query($sql);
$currents = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($currents,JSON_UNESCAPED_UNICODE);
?>