<html>
   <head>
   <meta charset="utf-8">
      <title>
          Oleksii Shevchenko
     </title>
     <script src="ajax.js"></script>
     
	 <?php require 'db.connection.php'; ?>
   </head>
   <body>
   <form method = "GET">
        Vendors<br>

       

        <input type = "button" value = "Get" onclick = "getVendor()">
        <input type = "button" value = "Storage" onclick = "storageVendor()">

        <div id = "result_VENDOR"></div>
    </form>
	<form method = "GET">
        Items out of stock<br>

       

        <input type = "button" value = "Get" onclick = "getOutOfStock()">
        <input type = "button" value = "Storage" onclick = "storageEmpty()">

        <div id = "result_out"></div>
    </form>
	<form method = "GET">
        Items by price<br>

       

        <input class="input" type = "number" id="min" value = "min" >
        <input class="input" type = "number" id="max" value = "max" >
		<input type = "button" value = "Get" onclick = "getByPrice()">
		<input type = "button" value = "Storage" onclick = "storagePrice()">

        <div id = "result_price"></div>
    </form>

 
		
		
</body>
</html>