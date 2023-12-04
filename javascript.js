function submit() {
    var newData = document.createElement("div");
    newData.innerHTML = document.getElementById("box").value;
    newData.onclick = removeData;
    document.getElementById("submitted").appendChild(newData);

}

function removeData() {
    document.getElementById("submitted").removeChild(this);
}

function clearInput() {
    var getValue = document.getElementById('box');
    if (getValue.value != "") {
        getValue.value = "";
    }
}

function getGeoLocation()
{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
   alert("Geolocation is not supported by this browser.");
  }
}
function showPosition(position) {
    document.getElementById("demo").innerHTML =
    "Latitude: " + position.coords.latitude + "<br>" +
    "Longitude: " + position.coords.longitude;
}


  // EB.Barcode.enable({}, scanReceived);
       // function scanReceived(params){
            // No data or no timestamp, scan failed.
         //   if(params['data']== "" || params['time']==""){
           //     document.getElementById('display').innerHTML = "Failed!";
             //   return;
            // }
            // Data and timestamp exist, barcode successful, show results
          //  var displayStr = "Barcode Data: " + params['data']+"<br>Time: "+params['time'];
           // document.getElementById("display").innerHTML = displayStr;
        //}

        //function enableScanners(){
            
            // Empty property hash, '{}' loads default values for the scanner.
        //}

       //function unloadEvent(){
        //EB.Barcode.disable();
            // Disable Barcode on unload of page to free it up for other operations.
      //}
