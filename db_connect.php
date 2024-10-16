<?php

$servername = 'localhost';
$usename = 'root';
$password = 'root';
$db_name = 'techmae';

$conn = new mysqli($servername, $usename,$password, $db_name);
$conn->set_charset('utf8');

if($conn -> connect_error){
    echo "Error name: ". $con->connnect_erro;
};

