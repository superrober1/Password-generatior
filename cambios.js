const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
    "V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
    "^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charLetras = characters.filter(char => /^[a-zA-Z]$/.test(char));
const charNumeros = characters.filter(char => /^[0-9]$/.test(char));
const charSimbolos = characters.filter (char =>!/^[a-zA-Z0-9]$/.test(char));



let botonGenerador = document.getElementById("pelmazo");

botonGenerador.addEventListener("click",password); // boton que activa el generador

let botonLImpieza = document.getElementById("borrar");
botonLImpieza.addEventListener("click",borrado);


function borrado(){
    document.getElementById("restriccion").value = "";
    document.getElementById("pass1").value = "";
    document.getElementById("pass2").value = "";


}

function password(){

if (document.getElementById ("soloNumeros").checked === true){

    let solicitud = Number(document.getElementById("restriccion").value);
   for (let i=1; i<=solicitud; i++){
    let perrito= Math.floor(Math.random() * charNumeros.length);//numero al azar
    document.getElementById("pass1").value += charNumeros[perrito];
   }

    let solicitud2 = Number(document.getElementById("restriccion").value);
   for (let i=1; i<=solicitud2; i++){
    let perrito2= Math.floor(Math.random() * charNumeros.length);//numero al azar
    document.getElementById("pass2").value += charNumeros[perrito2];
   }
};


if (document.getElementById ("soloSimbolos").checked === true){

    let solicitud = Number(document.getElementById("restriccion").value);
   for (let i=1; i<=solicitud; i++){
    let perrito= Math.floor(Math.random() * charSimbolos.length);//numero al azar
    document.getElementById("pass1").value += charSimbolos[perrito];
   }

    let solicitud2 = Number(document.getElementById("restriccion").value);
   for (let i=1; i<=solicitud2; i++){
    let perrito2= Math.floor(Math.random() * charSimbolos.length);//numero al azar
    document.getElementById("pass2").value += charSimbolos[perrito2];
   }

};


if ((document.getElementById ("soloSimbolos").checked === true) && (document.getElementById ("soloNumeros").checked === true)){ 
    let solicitud = Number(document.getElementById("restriccion").value);
   for (let i=1; i<=solicitud; i++){
    let perrito= Math.floor(Math.random() * characters.length);//numero al azar
    document.getElementById("pass1").value += characters[perrito];
   }

    let solicitud2 = Number(document.getElementById("restriccion").value);
   for (let i=1; i<=solicitud2; i++){
    let perrito2= Math.floor(Math.random() * characters.length);//numero al azar
    document.getElementById("pass2").value += characters[perrito2];
   }

};

}

