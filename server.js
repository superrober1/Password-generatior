const express= require('express');
const app = express();
const PORT =3000;
app.use(express.json());


app.post('/api/generar',(req,res)=> { 

const longitud = Number(req.body.longitud);
const quiereNumeros = req.body.numeros;
const quiereSimbolos= req.body.simbolos;

console.log('Peticion recibida: Longitud:${longitud}, Numeros:${quiereNumeros}, Simbolos:${quiereSimbolos}');

res.json({

    mensaje:"servidor conectado con exito",
    passwordtemp:"prueba123"


});
});