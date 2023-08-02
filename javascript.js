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