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

var x = document.getElementById("demo");
function getLocation()
  {
  if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition,showError,
          {
            enableHighAccuracy : true,
            timeout : 10000, // 10s
            //maximumAge : 0
          }
        );
    }
  else{x.innerHTML="Geolocation is not supported by this browser.";}
  }
function showPosition(position)
  {
  x.innerHTML="Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;    
  }
function showError(error)
  {
  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      x.innerHTML="User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML="Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML="The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML="An unknown error occurred."
      break;
    }
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
