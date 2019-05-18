<?php
//设置编码
header('content-type:text/html;charset=utf-8');
//连接数据库
include 'main.php';


$id = isset($_GET['id']) ? $_GET['id'] : '';//?商品的id
$count1 = isset($_GET['qty']) ? $_GET['qty'] : '';//*从详情页传过来的商品数量
$userId = isset($_GET['consumer'])?$_GET['consumer']:'Tiko123';//!获取登录用户的data
$isOk =isset($_GET['on_off'])?$_GET['on_off']:'';//todo 判断是否从详情页传数据过来
$count2 = isset($_GET['newCount'])?$_GET['newCount']:'';//从订单页直接修改商品数量
$del = isset($_GET['type'])?$_GET['type']:'';//!删除指定的商品

if($isOk){
  //todo 从商品库找对应的商品数据
    $sql1 = "SELECT * FROM list_data WHERE id=$id";
  //执行语句
    $res1 = $connect->query($sql1);
    $need = $res1->fetch_all(MYSQLI_ASSOC);

    $merchant = $need[0]['merchant'];//!店铺名
    $images = $need[0]['bigImg'];//?图片
    $introduce = $need[0]['goodsName'];//*商品名及描述
    $price = $need[0]['price'];//todo 价格


     //!查看订单库有没有相同的数据
        $sql2= "SELECT * FROM order_data WHERE goodId = $id AND userId= '$userId'";
        $res2 = $connect->query($sql2);
          
        if($res2->num_rows==1){
          //*如果该用户名在订单库有对应的商品,则只增加商品数量,否则添加新的数据
         $sql3= "UPDATE order_data SET counts= counts+$count1 WHERE goodId = $id;";
        $res3 = $connect->query($sql3);
      }else{
         //?新数据传入订单库
         $sql4 = "INSERT INTO order_data(shops,pic,goodName,price,counts,userId,goodId) VALUES ('$merchant','$images','$introduce','$price','$count1','$userId','$id')";
         $res4 = $connect->query($sql4);
      }
    
}

//todo 把数据传给前端

//?找对应用户下的店铺名并去重
$sql5 = "SELECT  DISTINCT shops FROM order_data WHERE userId='$userId'";
$res5 = $connect->query($sql5);

//获取该用户下所有的商品
$sql6 = "SELECT * FROM order_data WHERE userId='$userId'";
$res6 = $connect->query($sql6);

//!把订单页修改的数量传入订单库
$sql7 = "UPDATE order_data SET counts = $count2 WHERE userId = '$userId' AND goodId = $id";
$res7 = $connect->query($sql7);

//* 从订单库删除对应的商品
  if($del){
  $sql8 ="DELETE FROM order_data WHERE userId = '$userId' AND goodId = $id";
  $res8 = $connect->query($sql8);
}

//?显示在详情页的购物总价及总件数
$sql9 = "SELECT SUM(counts) FROM order_data WHERE userId='$userId'";
$res9 = $connect->query($sql9);

$sql10 = "SELECT SUM(counts*price) FROM order_data WHERE userId='$userId'";
$res10 = $connect->query($sql10);


$content1 = $res5->fetch_all(MYSQLI_ASSOC);
$content2 = $res6->fetch_all(MYSQLI_ASSOC);

$content3 = $res9->fetch_all(MYSQLI_ASSOC);
$content4 = $res10->fetch_all(MYSQLI_ASSOC);

//数据传去前端
$datalist = array(
    'data1' => $content1,
    'data2'=> $content2,
    'res1'=> $content3,
    'res2'=> $content4
);

echo json_encode($datalist,JSON_UNESCAPED_UNICODE);

?>