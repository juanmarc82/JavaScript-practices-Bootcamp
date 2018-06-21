"use strict";

// Excepciones. Cuando nos encontramos situaciones excepcional y no sabemos como recuperar el error ni que hacer
// podemos lanzar una excepción con comando Throw. Lo que hace es lanzar lo que le pongamos ( string por ejemplo)

function ultimoElemento(array) {
    if(array.length > 0)
    return array[array.length - 1];
    else
        throw "No se puede sacar el ultimo elemento de un array vacio";
}

//console.log(ultimoElemento([]));


try {
    console.log(ultimoElemento([]));
}
catch (error){
    console.log(error);
    
}


class Fecha
{
    constructor (dia, mes, ano)
    {
        if(typeof dia != 'numer' ||
           typeof mes != 'numer' ||
           typeof ano != 'numer' )
           {
               throw new Error ("dia, mes o ano no es un numero!");
           }
    }
}

//let f = new Fecha(2, 'Marzo', 1982);

try {
    let f2 = new Fecha(2, 'Marzo', 1982);
    console.log("Esto no ejecuta una excepcion");
} 
catch (error) 
{
    console.log("EXCEPTION:" + error);    
}
finally
{
    console.log("Excepcion o no, siempre ejecuta lo que metamos en finally");
}
