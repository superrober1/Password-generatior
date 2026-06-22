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

function password() {
    // 🧹 1. LIMPIEZA INICIAL: Vaciamos las cajas antes de empezar para que no se acumulen contraseñas viejas
    document.getElementById("pass1").value = "";
    document.getElementById("pass2").value = "";

    // 📦 2. LA BOLSA DINÁMICA: Empezará vacía y guardará SOLO los caracteres permitidos
    let bolsaDeCaracteres = [];

    // 🚦 3. FILTROS INDEPENDIENTES: Llenamos la bolsa usando .concat()
    if (document.getElementById("soloNumeros").checked === true) {
        bolsaDeCaracteres = bolsaDeCaracteres.concat(charNumeros);
    }
    
    if (document.getElementById("soloSimbolos").checked === true) {
        bolsaDeCaracteres = bolsaDeCaracteres.concat(charSimbolos);
    }

    // 🛑 4. CONTROL DE SEGURIDAD: Si no marcaron ninguna casilla, la bolsa mide 0. Frenamos el código.
    if (bolsaDeCaracteres.length === 0) {
        alert("Por favor, selecciona al menos una casilla (Números o Símbolos).");
        return; // Termina la función inmediatamente
    }

    // 📐 5. CAPTURA DE LONGITUD: Leemos cuántos caracteres quiere el usuario
    let solicitud = Number(document.getElementById("restriccion").value);

    // 🔄 6. UN SOLO BUCLE PARA PASS1: Saca elementos al azar de la bolsa combinada
    for (let i = 1; i <= solicitud; i++) {
        let perrito = Math.floor(Math.random() * bolsaDeCaracteres.length);
        document.getElementById("pass1").value += bolsaDeCaracteres[perrito];
    }

    // 🔄 7. UN SOLO BUCLE PARA PASS2: Hace exactamente lo mismo para la segunda caja
    for (let i = 1; i <= solicitud; i++) {
        let perrito2 = Math.floor(Math.random() * bolsaDeCaracteres.length);
        document.getElementById("pass2").value += bolsaDeCaracteres[perrito2];
    }
}

/*function password(){

document.getElementById("pass1").value = ""; // limpieza inicial
document.getElementById("pass2").value = "";

let bolsaDeCaracteres= []; // string vacio

if (document.getElementById ("soloNumeros").checked === true){ // si la casilla esta seleccionada

    let solicitud = Number(document.getElementById("restriccion").value); // establecemos limitante segun cliente
   for (let i=1; i<=solicitud; i++){
    let perrito= Math.floor(Math.random() * charNumeros.length);//numero al azar
    bolsaDeCaracteres = bolsaDeCaracteres.concat(charNumeros); // metemos a los numero en el string vacio
    document.getElementById("pass1").value += bolsaDeCaracteres[perrito]               
   }

    let solicitud2 = Number(document.getElementById("restriccion").value);
   for (let i=1; i<=solicitud2; i++){
    let perrito2= Math.floor(Math.random() * charNumeros.length);//numero al azar
    bolsaDeCaracteres = bolsaDeCaracteres.concat(charNumeros);// metemos a los numero en el string vacio
    document.getElementById("pass2").value += bolsaDeCaracteres[perrito2];
   }
};


if (document.getElementById ("soloSimbolos").checked === true){

    let solicitud = Number(document.getElementById("restriccion").value);
   for (let i=1; i<=solicitud; i++){
    let perrito= Math.floor(Math.random() * charSimbolos.length);//numero al azar
    bolsaDeCaracteres = bolsaDeCaracteres.concat(charSimbolos);// metemos a los simbolos en el string vacio
    document.getElementById("pass1").value += bolsaDeCaracteres[perrito];
   }

    let solicitud2 = Number(document.getElementById("restriccion").value);
   for (let i=1; i<=solicitud2; i++){
    let perrito2= Math.floor(Math.random() * charSimbolos.length);//numero al azar
    bolsaDeCaracteres = bolsaDeCaracteres.concat(charSimbolos);// metemos a los simbolos en el string vacio
    document.getElementById("pass2").value += bolsaDeCaracteres[perrito2];
   }

};


if ((document.getElementById ("soloSimbolos").checked === true) && (document.getElementById ("soloNumeros").checked === true)){ 
    let solicitud = Number(document.getElementById("restriccion").value);
   for (let i=1; i<=solicitud; i++){
    let perrito= Math.floor(Math.random() * characters.length);//numero al azar
    document.getElementById("pass1").value += bolsaDeCaracteres[perrito];
   }

    let solicitud2 = Number(document.getElementById("restriccion").value);
   for (let i=1; i<=solicitud2; i++){
    let perrito2= Math.floor(Math.random() * characters.length);//numero al azar
    document.getElementById("pass2").value +=  bolsaDeCaracteres[perrito2];
   }

};

}
*/
