<?php
//设置编码
header('content-type:text/html;charset=utf-8');
//?连接数据库
include 'main.php';
//*接收数据
//第几页
$page = isset($_POST['page']) ? $_POST['page'] : '';
//每页的条数
$num = isset($_POST['num']) ? $_POST['num'] : '';

//排序的类别
$type = isset($_POST['type']) ? $_POST['type'] : '';


//todo 规律
$index = ($page-1) * $num;

    if($type){
        $sql1 = "SELECT * FROM list_data ORDER BY ($type + 0) DESC LIMIT $index,$num";
    }else{
        $sql1 = "SELECT * FROM list_data LIMIT $index,$num";
    } 

//执行语句

$res1 = $connect->query($sql1);

//需求：要数据
$need = $res1->fetch_all(MYSQLI_ASSOC);


//!为了获取总条数
$sql2 = "SELECT * FROM list_data";
//执行语句
$res2 = $connect->query($sql2);


//传输多个数据
$summary = array(
    "data" => $need,
    "total" => $res2->num_rows,
    "page" => $page,
    "num"=> $num
);

//把数组转成字符串,并防止中文转义
echo json_encode($summary,JSON_UNESCAPED_UNICODE);
?>