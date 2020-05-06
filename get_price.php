<?php
header('Content-Type:application/json');

require "db.connection.php";
$min = $_GET['min'];

$max = $_GET['max'];


$items_by_price = $collection->find(['price' => ['$gte'=>intval($min), '$lte' =>intval($max)]],['projection'=>['name'=>1]])->toArray();

   
    echo json_encode($items_by_price);
?>