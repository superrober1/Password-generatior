const express= require('express');
const app = express();
const PORT =3000;
app.use(express.json());


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
    "V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
    "^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charLetras = characters.filter(char => /^[a-zA-Z]$/.test(char));
const charNumeros = characters.filter(char => /^[0-9]$/.test(char));
const charSimbolos = characters.filter (char =>!/^[a-zA-Z0-9]$/.test(char));




app.post('/api/generar',(req,res)=> { 

const longitud = Number(req.body.longitud);
const quiereNumeros = req.body.numeros;
const quiereSimbolos= req.body.simbolos;

console.log('Peticion recibida: Longitud:${longitud}, Numeros:${quiereNumeros}, Simbolos:${quiereSimbolos}');

  // 📦 2. LA BOLSA DINÁMICA: Empezará con letras y guardará SOLO los caracteres permitidos
    let bolsaDeCaracteres = [].concat(charLetras);

    if(quiereNumeros===true){
        bolsaDeCaracteres=bolsaDeCaracteres.concat(charNumeros);
    }

    if(quiereSimbolos===true){
        bolsaDeCaracteres=bolsaDeCaaracteres.concat(charSimbolos);
    }

let password1Result="";
let password2Result="";

for (let i=1; i<= longitud;i++){
    let perrito = Math.floor(Math.random()*bolsaDeCaracteres.length);
    password1Result += bolsaDeCaracteres[perrito]; // aqui password1result reemplasa a document.getElementById("pass1").value
}

for (let i=1; i<= longitud;i++){
    let perrito2 = Math.floor(Math.random()*bolsaDeCaracteres.length);
    password2Result += bolsaDeCaracteres[perrito2];
}



res.json({

 pass1: password1Result,
 pass2: password2Result
});
});

app.use (express.static('.'));

app.listen(PORT,() =>{

console.log(`🚀 Servidor corriendo con éxito en http://localhost:${PORT}`);


});   