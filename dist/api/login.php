<?php
//设置编码
header('content-type:text/html;charset=utf-8');
//连接数据库
include 'main.php';

$username = isset($_POST['user']) ? $_POST['user'] : '';
$phone = isset($_GET['phone']) ? $_GET['phone'] : '';
$pwd = isset($_POST['pwd']) ? $_POST['pwd'] : '';

//查找是否数据库相同的数据
$sql1 = "SELECT * FROM register_library WHERE username='$username'";
$sql2 = "SELECT * FROM register_library WHERE phone='$phone'";
$sql3 ="SELECT * FROM register_library WHERE username='$username' AND pwd='$pwd'";
$sql4 ="SELECT username FROM register_library WHERE phone = '$phone'";

//执行语句
$res1 = $connect->query($sql1);
$res2 = $connect->query($sql2);
$res3 = $connect->query($sql3);

$temp = $connect->query($sql4);
$res4 = $temp->fetch_array(MYSQLI_ASSOC);


$result = array(
'user'=>$res1->num_rows,
'mobile'=>$res2->num_rows,
'login1'=>$res3->num_rows,
'login2'=>$res4['username']

);

echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>