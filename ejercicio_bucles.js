// // Ejercicio 1

// function muestraNum(n) {
//     var pos = 1;
//     while (pos <= n) {
//         console.log(pos);
//         pos++;         
//     }
// }

// muestraNum(100);

// Ejercicio 2

// function numAtras(params) {
//     var pos = 100;
//     while (pos >= 0) {
//         console.log(pos);
//         pos--;        
//     }
// }

// numAtras(100);

// Ejercicio 3

// function numPares(n) {
//     var pos = 0;
//     while (pos <= n) {
//         if (pos % 2 == 0) {
//             console.log(pos);       
//         }
//         pos++;
//     }
// }
// numPares(100);

// Ejercicio 4

// function numImpares(n) {
//     var pos = 100
//     while (pos>=0) {
//         if (pos %2 !== 0) {
//             console.log(pos);
//            }
//            pos--;
//         }       
// }

// numImpares(110);

// Ejercicio 5

// var contador = 1;
// var suma = 0;

// while (contador <=100) {
//         console.log(suma += contador);
//         contador++;    
// }

// Ejercicio 6

// var contador = 1;
// var suma = 0;

// while (contador <= 100) {
//     if (contador %2 == 0) {
//         console.log(suma += contador);
        
//     }
//     contador++;
// }

// Ejercicio 7

// var contador = 1;
// var suma = 0;

// while (contador <= 100) {
//     if (contador %2 != 0) {
//         console.log(suma += contador);
//     }
//     contador++;
// }

// Ejercicio 8

// var contador = 1;
// var suma = 0;
// var sumaTotal = [];

// while (contador <= 100) {
//     if (contador %2 == 0) {
//         suma += contador;
//         console.log(suma);
//         sumaTotal.push(contador)
//     }
//     contador++;
// }
// console.log('La suma total de todos los numeros pares es ' + suma);

// console.log('En total ha sumado ' + sumaTotal.length + ' números. ');

// Ejercicio 9


// function muestraN(numA, numB) {
//     var contador = 1;
//     while (contador < numB) {       
//         console.log('Esta es la vuelta del bucle número ' + contador + ' y en la siguiente incrementará un número. ');
//         contador++;

//         if (contador == numB) {
//         console.log('Esta es la vuelta del bucle número ' + contador + ' y aquí se para. ');
//     }
//     }    
// }
// muestraN(0, 20);

// Ejercicio 10

// function muestraNimpar(numA, numB) {
//     contador = 0;
//     while (contador <= numB) {
//         if (contador %2 != 0) {
//             console.log('Este es el número impar ' + contador);
//         }
//         contador++;
//     }
// }
// muestraNimpar(0, 20);