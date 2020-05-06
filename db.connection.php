<?php

require_once "./vendor/autoload.php";
#$client = new MongoDB\Client;
#$testdb = $client ->testdb;
#$result = $testdb->createCollection("test_collection");


$collection = (new MongoDB\Client("mongodb://localhost:27017"))->itech->items;



$itemsOutStock  = $collection->find(["quantity"=>0],["projection"=>["name"=>1]])->toArray();

?>