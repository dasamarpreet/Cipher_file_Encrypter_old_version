
var encryptButton = document.getElementById("encryptButton");
var decryptButton = document.getElementById("decryptButton");
var appWorkingButton = document.getElementById("appWorkingButton");

function encryptData() {
    window.location.href = "upload"
}
function decryptData(){
    window.location.href = "download"
}
function appWorking(){
    window.location.href = "aboutApp"
}

encryptButton.addEventListener("click", encryptData);
decryptButton.addEventListener("click", decryptData);
appWorkingButton.addEventListener("click", appWorking);