"use strict";  // con esto hacemos que JS se ejecute en modo estricto y va a ahorrarnos errores.

class FirstClass{

}
let fc1 = new FirstClass;
let fc2 = new FirstClass;


class FechaSimple {
    constructor(mes, dia, ano){
        this._mes = mes;
        this._dia = dia;
        this._ano = ano;
    }
    anadirDias(nDias)  // las funciones que pertenecen a las clases como estas dos, se suelen llamar METODOS
    {
        this._dia = nDias + this._dia;
        return this._dia;  //Aumentar los dias con nDias y validar aqui
    }

    obtenerDia()
    {
        return this._dia;
    }
    get mes()
    {
        return this._mes;
    }
    set dia(dia)
    {
        return this._dia = dia;
    }
}
let hoy = new FechaSimple(10, 24, 2018); // Garantiza ser inicializado correcto


// Manipulando solo a traves de unas funciones 'autorizados' asegura que el estado se mantiene valido
hoy.anadirDias(1);
console.log(hoy.obtenerDia());

let f = new FechaSimple(10, 24, 2018);
console.log(f.mes);
let f2 = new FechaSimple(10, 24, 2018);
f2.dia = 23;