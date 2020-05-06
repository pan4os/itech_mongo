<?php

function getVendors() {
    require 'db.connection.php';

    return ($collection->distinct('vendor'));
}

?>