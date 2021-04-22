var primulNumar = prompt("a");
var operatia = prompt("operatia este:");
var alDoileaNumar = prompt ("b");
var rezultat


if (operatia == "+") {
    rezultat = parseInt(primulNumar)  + parseInt(alDoileaNumar);
    alert("a + b = " + rezultat);
} else if (operatia == "-") {
    rezultat = parseInt(primulNumar)  - parseInt(alDoileaNumar);
    alert("a - b = " + rezultat);
} else if (operatia == "*") {
    rezultat = parseInt(primulNumar)  * parseInt(alDoileaNumar);
    alert("a * b = " + rezultat);
} else if (operatia == "/") {
    rezultat = parseInt(primulNumar)  / parseInt(alDoileaNumar);
    alert("a / b = " + rezultat);
} else {
    alert("Aceasta operatie nu este o operatie aritmetica de baza!")
}