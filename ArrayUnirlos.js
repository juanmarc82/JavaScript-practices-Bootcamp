// Concatenar o combinar Arrays
// Concatenar dos arrays en un array nuevo SIN ES6

const arrA = [0, 1, 2, 3, 4, 5, 6];
const arrB = [7, 8, 9, 10];
let merged=[];
for (let e of arrA)
{
    merged.push(e);
}
for(let e of arrB)
{
    merged.push(e);
}
console.log(merged);


// CON ES6 NO HACE FALTA ESO, SOLO CON "SPREAD" (...) SE HACE.
const combinado = [...arrA, ...arrB];
console.log(combinado);

/* Ejercicio
Divide un Array en 3 partes.
Concatenalos en orden invertido */

let arrRaiz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr1 = arrRaiz.slice(0, Math.round(arrRaiz.length/3));
let arr2 = arrRaiz.slice(Math.round(arrRaiz.length/3), Math.round(2 * arrRaiz.length/3) );
let arr3 = arrRaiz.slice(Math.round(2 * arrRaiz.length/3));

console.log(arr1);

console.log(arr2);

console.log(arr3);
const invertido = [...arr3, ...arr2, ...arr1];
console.log(...invertido);

/* Ejercicio
Inserta un elemento en la mitad de un array, pon el string "MITAD" en el nuevo elemento */
//Antes 
const arrOrg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Despues
//const arrInserted = [1, 2, 3, 4, 5,"MITAD" , 6, 7, 8, 9, 10];

const arrpart1 = arrOrg.slice(0, Math.round(arrOrg.length/2));
const arrpart2 = arrOrg.slice(Math.round(arrOrg.length/2));
const string = "MITAD";
console.log(arrpart1);
console.log(arrpart2);

const arrInserted = [...arrpart1, ...string, ...arrpart2];
console.log(...arrInserted);

/* Ejercicio 
unir dos arrays ordenados con las clases. 
Coger el número mas bajo de los dos e introducirlos por orden*/

/* Creamos funcion con los metodos que vamos a querer usar. Aunque no existan todavia
los crearemos en la class a continuación.
Esto nos ayuda a plantear el problema con perspectiva.*/
function combinarOrdenado(listaA, listaB) {
    //Donde guardar el resultado
    const combinado = new Lista();

    while (listaA.hayMas() && listaB.hayMas()) { //Si en los dos hay mas
        if (listaA.valorActual < listaB.valorActual) {
            combinado.push(listaA.cogerActual());
        }
        else {
            combinado.push(listaB.cogerActual());
        }
    }
    if (listaA.hayMas()) {
        while (listaA.hayMas()) { // Si todavia hay mas en A
            combinado.push(listaA.cogerActual());
        }
    }
    if (listaB.hayMas()) {
        while (listaB.hayMas()) { // Si todavia hay mas en B
            combinado.push(listaB.cogerActual());
        }
    }
    return combinado; //Retornar
}



// Creamos una clase con los métodos que queremos usar en el algoritmo de arriba.
class Lista  {
    constructor(array){
        this._array = array || [];
        this._posicionActual = 0;
    }
    get valorActual(){
        return this._array[this._posicionactual];
    }
    hayMas() 
    {
        return this._posicionActual < this._array.length;
    }
    cogerActual()
    {
        return this._array[this._posicionActual++];
    }
    push(valor)
    {
        this._array.push(valor);
    }
}

/* Si nos fijamos, estamos tratando los objetos en la anterior clase como un Array;
pero los Array en sí mismos son como una clase a la cual podemos llamar
En el siguiente código se ve el ejemplo de cómo heredar la clase de array en otra clase */
class Lista extends Array {
    constructor(array){

        super(...array); //usamos Spread para descomponer el contenido de la variable como elementos individuales.
        this._posicionActual = 0;
    
    }
    get valorActual(){
        return this[this._posicionactual];
    }
    hayMas() 
    {
        return (this._posicionActual < this.length);
    }
    cogerActual()
    {
        return this[this._posicionActual++];
    }
}

