<?php
//设置编码
header('content-type:text/html;charset=utf-8');
//连接数据库
include 'main.php';

$uid = isset($_POST['uid']) ? $_POST['uid'] : '';
$message = isset($_POST['comment']) ? $_POST['comment'] : '';
$type = isset($_POST['new']) ? $_POST['new'] :'';

$newM = null;
if($type){
//?插入数据库
$sql1 = "INSERT INTO message_data(userName,comments) VALUES('$uid','$message')";
$res1 = $connect->query($sql1);
};


$sql2= "SELECT * FROM message_data";
$res2 = $connect->query($sql2);

$totalM = $res2->fetch_all(MYSQLI_ASSOC);

$callback = array(
'totalM' =>$totalM

);

echo json_encode($callback,JSON_UNESCAPED_UNICODE);

?>