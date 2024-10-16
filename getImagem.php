<?php
    require_once './db_connect.php';
    $PicNum = $_GET["PicNum"];

	$result = $conn->query("SELECT * FROM photos where id=$PicNum") or die("Impossível executar a query1");
	$row=mysqli_fetch_assoc($result);
	Header( "Content-type: image/gif");
	echo $row['data'];
?>