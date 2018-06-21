//ejercicio 1

// Diseña una clase que representa un libro
//- libros tiene Titulos, la clase Libro tiene una propiedad Titulo, solo lectura.El titulo se guarda en el constructor.

// Diseña otra clase que represente una estanteria.
//- cada estanteria tiene una propiedad lectura solo,libros que retorna la coleccion de libros guardado.

// Los libros se pueden guardar en una Estanteria.Cada libro guardado, tiene una propiedad Estanteria que contiene una referencia al Estanteria donde esta guardado.

"use strict";

class libros {
    constructor (titulo, guardadoEn){
        this._titulo = titulo;
        this._guardadoEn = this._estante;
    }
    get libroTitulo (){
        return this._titulo;
    }
}

class Estanteria {
    constructor (nombre){
        this._nombre = nombre;
        this._estante = [];
    }
    get nombre (){
        return this._nombre;
    }
    get libros (){
        return this._estante;
    }
    guardame (libro){
        this._estante.push(libro);
    }
}

let estanteria1 = new Estanteria("e1");
let libro1 = new libros("La Historia Interminable", estanteria1);
let libro2 = new libros("Las Catedrales del Viento", estanteria1);


estanteria1.guardame(libro1);
libro1.guardame(estanteria1);

console.log(libro1.estanteria.nombre);
console.log(libros1);





