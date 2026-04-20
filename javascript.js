// EB.ScreenOrientation.leftHanded();

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
   alert("Geolocation is not supported by your browser.");
  }
}
function showPosition(position) {
    document.getElementById("demo").innerHTML =
    "Latitude: " + position.coords.latitude + "<br>" +
    "Longitude: " + position.coords.longitude;
}

function scanReceived(params){
  // No data or no timestamp, scan failed.
  if(params['data']== "" || params['time']==""){
      document.getElementById('display').innerHTML = "Failed!";
      return;
  }
  // Data and timestamp exist, barcode successful, show results
  var displayStr = "Barcode Data: " + params['data']+"<br>Time: "+params['time'];
  document.getElementById("display").innerHTML = displayStr;
}

function enableScanners(){
  EB.Barcode.enable({}, scanReceived);
  // Empty property hash, '{}' loads default values for the scanner.
}

function unloadEvent(){
  EB.Barcode.disable();
  // Disable Barcode on unload of page to free it up for other operations.
}
    function startNfcReader() {
      // Check support and enable adapter if necessary
      if (!EB.EzNFC.isSupported) {
        alert("NFC not supported on this device.");
        return;
      }
      if (!EB.EzNFC.isEnabled) {
        EB.EzNFC.enableAdapter();
      }

      // Start reading automatically
      EB.EzNFC.enableRead(enableNfcCallback1);
    }

function enableNfcCallback1(dat) {
	var ID = dat.id;
	var Type = dat.type;
	var TNF = dat.tnf;
	var Payload = dat.payload;
	var EncodingFormat = dat.encodingformat;
	var Result = dat.result;
	var TagIDHexa = dat.tagidhexa;
	var TagIDDecimal = dat.nfctagdecid;
	var TagIDReversed = dat.nfctagreversedid;
	var ShowData = "ID: " + ID + "<BR>Type: " + Type + "<BR>TNF: " + TNF + "<BR>Payload: " + Payload + "<BR>EncodingFormat: " + EncodingFormat + "<BR>Result: " + Result + "<BR>TagIDHexa: " + TagIDHexa + "<BR>TagIDDecimal: " + TagIDDecimal+ "<BR>TagIDReversed: " + TagIDReversed  ;
	
	document.getElementById("display").innerHTML = ShowData;
}


    // Auto start when page loads
    window.onload = startNfcReader;


