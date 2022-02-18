var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");

function DibujarCabeza (){
pincel.beginPath();
pincel.arc(250,330,30,0,2*Math.PI);
pincel.stroke();
pincel.closePath()
}

//DibujarCabeza();

function DibujarTorso () {
    pincel.beginPath();
    pincel.moveTo (250, 360);
    pincel.lineTo (250,520);
    pincel.stroke();
    pincel.closePath ();

}

//DibujarTorso ();

function DibujarBrazoDerecho () {
    pincel.beginPath();
    pincel.moveTo (250, 380);
    pincel.lineTo (300, 450);
    pincel.stroke();
    pincel.closePath ()
}

//DibujarBrazoDerecho ();

function DibujarBrazoIzquierdo () {
    pincel.beginPath();
    pincel.moveTo (250, 380);
    pincel.lineTo (200, 450);
    pincel.stroke();
    pincel.closePath ()
}

//DibujarBrazoIzquierdo ();

function DibujarPiernaIzquierda () {
    pincel.beginPath();
    pincel.moveTo (250, 520);
    pincel.lineTo (200, 650);
    pincel.stroke();
    pincel.closePath ()
}

//DibujarPiernaIzquierda ();

function DibujarPiernaDerecha () {
    pincel.beginPath();
    pincel.moveTo (250, 520);
    pincel.lineTo (300, 650);
    pincel.stroke();
    pincel.closePath ()
}

//DibujarPiernaDerecha ();

function DibujarHorca () {
    pincel.fillStyle="black";
    pincel.beginPath();
    pincel.moveTo (100, 700);
    pincel.lineTo (150, 650);
    pincel.lineTo (200, 700);
    pincel.lineTo (100,700);
    pincel.moveTo (150, 650);
    pincel.fill();
    pincel.lineTo (150, 250);
    pincel.lineTo (250, 250);
    pincel.lineTo (250, 300);
    pincel.stroke();
    
    pincel.closePath()
}

function ganador(){
    pincel.fillStyle = "green";
    pincel.font = "60px san-serif";
    pincel.fillText("GANASTE, FELICIDADES!!", 100, 100);
}

function perdedor(){
    pincel.fillStyle = "red";
    pincel.font = "60px san-serif";
    pincel.fillText("FIN DEL JUEGO", 100, 100);
}