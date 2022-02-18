String.prototype.replaceAt = function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); }

var botonAgregarPalabra = document.getElementById ("nueva-palabra");
var botonInicio = document.getElementById ("iniciar-juego");
var palabrasSecretas = ["JAZMIN", "BANANA", "MILANESA", "ESTUDIO", "ASOCIACION", "REBELDE", "SENSACIONES", "UTILIZAR"];
var nuevaPalabra = document.getElementById ("input-nueva-palabra");
var palabraSeleccionada;
var palabraSeleccionada;

botonAgregarPalabra.addEventListener("click", function (){
    palabrasSecretas.push(nuevaPalabra.value.toUpperCase());
    console.log(palabrasSecretas);
})

var letraaValidar = document.getElementById("input-letra").value;



document.getElementById("input-letra").addEventListener("keyup",function(){
    this.value = this.value.toUpperCase();
    validar();
    document.getElementById("input-letra").focus();
});


function validar (letraaValidar) {
    var letraaValidar = document.getElementById("input-letra").value;
    var expresion = /^[A-Z]+$/;
    if (!expresion.test(letraaValidar)){
        alert ("ha ingresado un caracter no permitido, intentelo nuevamente");
        document.getElementById("input-letra").value = "";
       return false;
    }
};



function SortearPalabra() {
    palabraSeleccionada  = palabrasSecretas[ Math.floor (Math.random() * palabrasSecretas.length) ];
    palabraConGuiones = palabraSeleccionada.replace(/./g,"_ ");
    document.getElementById ("palabra-guiones").innerHTML = palabraConGuiones;
    console.log(palabraSeleccionada + palabraConGuiones);
    return palabraConGuiones;
}

botonInicio.addEventListener("click", function (event) {
    SortearPalabra();
    reiniciarJuego ();
});


var botonVerificarLetra = document.getElementById("nueva-letra");
var fallaste = true;
var errores = 0;
var letrasErroneas = []; 
 

function reiniciarJuego () {
    var palabraConGuiones = []; 
    var letrasErroneas = []; 
    document.getElementById("letras-erradas").innerHTML = letrasErroneas;
    document.getElementById ("palabra-guiones").innerHTML = palabraConGuiones;
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    DibujarHorca();
}

botonVerificarLetra.addEventListener("click", function (event) {
    var letraaValidar = document.getElementById("input-letra").value;
    
    for(const i in palabraSeleccionada) {
        if(letraaValidar == palabraSeleccionada[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letraaValidar);
            fallaste = false;
            }
        }
        if(fallaste){
        errores++;
            if (!letrasErroneas.includes(letraaValidar)) {
            letrasErroneas.push(letraaValidar);
            console.log(letrasErroneas);
            } else {
                alert("ya ingresaste esa letra!");
            }
        
            document.getElementById("letras-erradas").innerHTML = letrasErroneas;
            switch(errores){
                case 1:
                    DibujarCabeza();
                    break;
                case 2:
                    DibujarTorso();
                    break;
                case 3:
                    DibujarBrazoDerecho();
                    break;
                case 4:
                    DibujarBrazoIzquierdo();
                    break;
                case 5:
                    DibujarPiernaDerecha();
                    break;
                case 6:
                    DibujarPiernaIzquierda();
                    perdedor();
                    break;
            }
        }

        if(palabraConGuiones.indexOf("_")< 0) {
           ganador ();
        }
    fallaste = true;
    document.getElementById ("palabra-guiones").innerHTML = palabraConGuiones;
    document.getElementById("input-letra").value = "";
    document.getElementById("input-letra").focus();
});
