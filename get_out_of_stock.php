<?php
header('Content-Type:application/json');

require "db.connection.php";
    $items  = $collection->find(["quantity"=>0],["projection"=>["name"=>1]])->toArray();
    echo json_encode($items);
?>