function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'assets/potions.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}


loadJSON(function(response) {
console.log(response);

    jsonresponse = JSON.parse(response);


    console.log(jsonresponse);

});
