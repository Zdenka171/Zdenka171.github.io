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

var button =document.getElementById('los'); 
button.addEventListener ('click', ermittlePosition);
var ausgabe = document.getElementById('ausgabe');

function ermittlePosition() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(zeigePosition, zeigeFehler);
  } else { 
      ausgabe.innerHTML = 'Ihr Browser unterstützt keine Geolocation.';
  }
}

function zeigePosition(position) {
  ausgabe.innerHTML = "Ihre Koordinaten sind:<br> Breite: " + position.coords.latitude + 
  "<br>Länge: " + position.coords.longitude +'<br>Genaugikeit: ' + position.coords.accuracy;	
}

function zeigeFehler(error) {
  switch(error.code) {
      case error.PERMISSION_DENIED:
          ausgabe.innerHTML = "Benutzer lehnte Standortabfrage ab."
          break;
      case error.POSITION_UNAVAILABLE:
          ausgabe.innerHTML = "Standortdaten sind nicht verfügbar."
          break;
      case error.TIMEOUT:
          ausgabe.innerHTML = "Die Standortabfrage dauerte zu lange (Time-out)."
          break;
      case error.UNKNOWN_ERROR:
          ausgabe.innerHTML = "unbekannter Fehler."
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
