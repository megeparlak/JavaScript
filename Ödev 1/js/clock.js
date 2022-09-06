/*eslint-env browser*/
document.getElementById("myName").innerHTML = "Ege";

function goster(){
    var tarih = new Date();
    var saat = tarih.toLocaleTimeString();
    var gun = tarih.toLocaleDateString("tr-TR", { weekday : "long"})
    document.getElementById("myClock").innerHTML = saat +" "+ gun;
}

setInterval(goster,1000);