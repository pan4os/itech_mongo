let ajax = new XMLHttpRequest();


function getVendor()
{
    if (!ajax)
    {
        alert("You should init ajax");
        return;  
    }

    ajax.onload = function() {
        if(ajax.status===200) {

            
            localStorage.setItem("vendor", ajax.response);

            let res = JSON.parse(ajax.response);
            let result = "";
            result += "<table>";
            for(let i in res) {
                result += "<tr>";
                result += "<td>" + res[i] + "</td>"
                result += "<tr>";
            }
        document.getElementById("result_VENDOR").innerHTML = result;
        }
    }

   
    ajax.open("GET", "get_vendor.php?", true);
    ajax.send(null)
}
function storageVendor(){
    let data = localStorage.getItem("vendor");

    if (data == null)
    {
        alert("vendor storage empty");
        return;  
    }
    
    let res = JSON.parse(data);
   
    let result = "";
    result += "<table>";
    for(let i in res) {
        result += "<tr>";
        result += "<td>" + res[i] + "</td>"
        result += "<tr>";
    }

    document.getElementById("result_VENDOR").innerHTML = result;
}
function getOutOfStock (){
    if (!ajax)
    {
        alert("You should init ajax");
        return;  
    }

    ajax.onload = function() {
        if(ajax.status===200) {

            
            localStorage.setItem("empty", ajax.response);

            let res = JSON.parse(ajax.response);
            let result = "";
            result += "<table>";
            for(let i in res) {
                result += "<tr>";
                result += "<td>" + res[i].name + "</td>"
                result += "<tr>";
            }
        document.getElementById("result_out").innerHTML = result;
        }
    }

   
    ajax.open("GET", "get_out_of_stock.php?", true);
    ajax.send(null)

}
function storageEmpty(){
    let data = localStorage.getItem("empty");

    if (data == null)
    {
        alert("Items storage empty");
        return;  
    }
    
    let res = JSON.parse(data);
   
    let result = "";
    result += "<table>";
    for(let i in res) {
        result += "<tr>";
        result += "<td>" + res[i].name + "</td>"
        result += "<tr>";
    }

    document.getElementById("result_out").innerHTML = result;
}

function getByPrice (){
    if (!ajax)
    {
        alert("You should init ajax");
        return;  
    }
    var min = document.getElementById('min').value.toString();
	var max = document.getElementById('max').value.toString();

    ajax.onload = function() {
        if(ajax.status===200) {

            
            
            localStorage.setItem(JSON.stringify({"min":min,"max":max}), ajax.response);
           

            let res = JSON.parse(ajax.response);
            let result = "";
            result += "<table>";
            for(let i in res) {
                result += "<tr>";
                result += "<td>" + res[i].name + "</td>"
                result += "<tr>";
            }
        document.getElementById("result_price").innerHTML = result;
        }
    }

   
    ajax.open(`GET`, `get_price.php?min=${min}&max=${max}`, true);
    ajax.send(null)

}
function storagePrice (){
    var min = document.getElementById('min').value;
    var max = document.getElementById('max').value;
    key  = JSON.stringify({"min":min,"max":max});
    let data = localStorage.getItem(key);
    if (data == null)
    {
        alert("Price storage empty");
        return;  
    }
    
   
        {
            
                let res = JSON.parse(data);
                let result = "";
                result += "<table>";
                for(let i in res) {
                    result += "<tr>";
                    result += "<td>" + res[i].name + "</td>"
                    result += "<tr>";
                }
            document.getElementById("result_price").innerHTML = result;
            
        }

    
}

    

   
    

