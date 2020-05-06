<?php
 header('Content-Type:application/json');
    require "db.connection.php";
    $vendor = $collection->distinct('vendor');
    
    echo json_encode($vendor);
?>