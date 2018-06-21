/* eslint-disable no-alert, no-console, no-undef */
/* El programa reconoce que es un array por que le ponemos corchetes [] en lugar de llaves {} ( con las llaves serían objetos y le introduciríamos parámetros con los ":"" ) */

// var myArrayOfStrings = [ "First", "Second", "Third", "Fourth", "Fifth"]    // El Array detecta la cantidad de elementos que le introducimos y los ordena desde 0 en adelante
// var myArrayOfNumbers = [ 100, 245, 123, 786, 365]                          //así, el 0="First", 1="Second",...

// // console.log(myArrayOfNumbers[1]);
// // console.log(myArrayOfStrings[0]);

function printArray(arr) 
{
    var pos = 0;
    while(pos < arr.length)
    {
        console.log(arr[pos++]);       
    }
}

// printArray(myArrayOfStrings);
// printArray(myArrayOfNumbers);


// Con String podemos hacer lo mismo que con Array porque se comporta igual
//Reconoce los carácteres que le introducimos por orden desde el 0 en adelante. 
//Ejemplo:

// var hello = "Hello";                       //Declaramos una variable con valor STRING
// var firstLetter = hello[0];                //Definimos otra variable en la que decimos que la variable hello comienza por el valor 0
//console.log(firstLetter); // H           //Así, quedaría que H=0; e=1; l=2; l=3; o=4. y lo trataría como un string.
// pos = 0;
// while (pos < hello.length)
// {
//     console.log(hello[pos++]); 
// }

// printArray(hello);


//Ejercicio ----
/* Declara un array myAnimals que contiene  nuestros animales.animales

Declara una funcion que recibe un array de los animales.
La funcion debe sumar el pesso de todos los animales y retornar la suma de los pesos de los animales. */


/* 
var myAnimal1 = {    
    alive : true,
    type : "Cat",
    weight : 5,
}
var myAnimal2 = {
    alive : false,
    type : "Dog",
    weight : 15,
}
var myAnimal3 = {
    alive : false,
    type : "Rat",
    weight : 1,
}
var arraymyAnimals = [myAnimal1, myAnimal2, myAnimal3];
function sumaPeso(param) {
    var pos = 0; //variable de control del bucle
    var sum = 0; //variable para ir sumando en cada vuelta del bucle
    while (pos < param.length) 
    {
        sum += param[pos].weight;
        pos++;
    }
    return sum;    
}

console.log(sumaPeso(arraymyAnimals)); */
 

// Agregar elementos dinámicamente.



//Ejercicio. Declara una función que recibe un array de números
//La función debería retornar otro array que solo contiene los números impar del array recibido.

var numeros = [2,5,8,4554,7,9,33]
var numero2 = [5, 9 ,58 ,56 ,32 ,88, 77]
function retornaImpares(arr)
{
    var resultado = [];
    var pos = 0;
    while (pos < arr.length)
    {
        var currentNumber = arr[pos];
        if(currentNumber % 2 != 0)
        {
            resultado.push(currentNumber);
        }
        pos++;
    }

    return resultado;
}

printArray(retornaImpares(numeros));
console.log(retornaImpares(numero2));


// arrayNumeros.push(1);
// arrayNumeros.push(2);
// arrayNumeros.push(3);
// arrayNumeros.push(4);
// arrayNumeros.push(5);
// arrayNumeros.push(6);
// arrayNumeros.push(7);
// arrayNumeros.push(8);
// arrayNumeros.push(9);
// arrayNumeros.push(11);