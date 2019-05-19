<?php
//参数
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'mission';
 //创建链接
 $connect = new mysqli($servername, $username, $password, $dbname);
 // 检测连接
 if ($connect->connect_error) {
    die("连接失败: " . $connect->connect_error);
} 
//用于检测,成功就可以注释掉 
//  echo "连接成功";
?>