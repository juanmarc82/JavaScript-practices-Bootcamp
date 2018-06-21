// Declara un array asi
// var x = [[8, -2, 4],[1, 0, 5]];
// inspeccionarlo en el depurador.

// var x = [[8, -2, 4],[1, 0, 5]];

// var y
// console.log(x);

// var array = [[" "," " ," "," "," "," "," "," "," "," "],
//              [" "," " ," "," "," "," "," "," "," "," "],
//              [" "," " ,"H","E","L","L","O"," "," "," "],
//              [" "," " ," "," "," "," "," "," "," "," "],
//              [" "," " ," "," "," "," "," "," "," "," "],
//              [" "," " ," "," "," "," "," "," "," "," "],
//              [" "," " ," "," "," "," "," "," "," "," "],
//              [" "," " ," "," "," "," "," "," "," "," "],
//              [" "," " ," "," "," "," "," "," "," "," "],
//              [" "," " ," "," "," "," "," "," "," "," "]];


             
/* Ejercicio
Crea una función que imprime en la consola el array del ejercicio anterior.
Nota, debe convertir cada fila en un string antes de imprimir la fila en la consola.
Es necesario usar bucles anidados. */

// function printArr(arr) {
//     for (let x = 0; x < arr.length; x++) {
//         var arr1 = "";
//         for (let y = 0; y < arr[x].length; y++) {
//             arr1 += arr[x][y];            
//         }
//         console.log(arr1);        
//     }
// }

// printArr(array);

// function printArr(arr) {
//     for (let x = 0; x < arr.length; x++) {
//         var stringFila = "";
//         for (let y = 0; y < arr[x].length; y++) {
//             stringFila += array[x][y];            
//         } 
//         console.log(stringFila);
//     } 
// }

// printArr(array);




/* Ejercicio
Crea una función que crea un array de 2 dimensiones, los parámetros columns y rows contiene los dos dimensiones.
Primero crea un array vació normal matrix.
Con un bucle for añadiendo rows cantidad de arrays vacíos al array matrix con push(...)
Luego con un bucle anidado for, añadiendo columns cantidad de la letra "X" al cada array row.
Retorna el array matrix */

// function arrMatrix(rows, columns) {             //Tiene dos parametros que determinan las filas y columnas del array doble.
//     var matrix = [];                             // Declaramos el array prinpal que guardará el resto de datos.
//     for (let ix = 0; ix < rows; ix++) {          // Recorremos el Array prinpal. hasta el largo del parametro rows introducido
//         var arrVacioX =[];                       // declaramos un array vacio que meteremos en el array prinpal.
//         matrix.push(arrVacioX);                  // le agregamos el array vacio (fila) en cada vuelta al prinpal.
//         for (let iy = 0; iy < columns; iy++) {   // bucle for para recorrer el nuevo array vacio (fila).
//             var letra = " ";                 // declaro var que almacena el string que quiero introducir en las columnas (no es array) de la nueva fila(array)
//             arrVacioX.push(letra);           // agregamos el valor de la variable a la columna del array fila.
//         }        
//     }
    
//     return matrix;                               // retornamos el valor al array Matrix.
// }


// print(arrMatrix(40,80));


/* 
Adapta la función anterior añadiendo otro parámetro letra 
que contiene el carácter que debe usar para llenar el matriz en vez de 'X'.
Úsalo para crear un array con 40 filas y 80 columna conteniendo solo espacios '  '. */


// function arrMatrix2(rows, columns, letra ) {       //Tiene tres parametros que determinan las filas, columnas y contenido del array doble.
//     var matrix = [];                             // Declaramos el array prinpal que guardará el resto de datos.
//     for (let ix = 0; ix < rows; ix++) {          // Recorremos el Array prinpal. hasta el largo del parametro rows introducido
//         var arrVacioX =[];                       // declaramos un array vacio que meteremos en el array prinpal.
//         matrix.push(arrVacioX);                  // le agregamos el array vacio (fila) en cada vuelta al prinpal.
//         for (let iy = 0; iy < columns; iy++) {   // bucle for para recorrer el nuevo array vacio (fila).
//             arrVacioX.push(letra);               // agregamos el valor del parámetro a la columna del array fila.
//         }        
//     }
    
//     return matrix;                               // retornamos el valor al array Matrix.
// }

                                                       
//print(arrMatrix(40,80));


/* Ejercicio
Crea una función que que escribe la palabra "Hello" letra por letra en el array anterior,
 en fila 10, empezando en columna 10 con la letra 'H' y 'e' en columna 11 etc. */

// function  hello (array, coorX, coorY, string) {
//     // array = [];
//     // string ="";
//     // for (let ix = coorX; ix < string.length; ix++) {
//     //     for (let iy = coorY; iy < array.length; iy++) {
//     //         const element = array[iy];
//     let nuevaMatriz = array;  
//     for (let i = 0; i < string.length; i++) {
//         let letra = string[i];
//         nuevaMatriz[coorX][coorY+i] = letra;
//     } return nuevaMatriz;
    
      
// }
// console.log(hello(arrMatrix(10,10), 5, 5, "hello"));

// function createFilaYColumnas(rows, columns)
// {

//     var matrix =[];

//     for (let r = 0; r < rows; r++) {
//         var fila = nuevaFila(columns);
//         matrix.push(fila);
        
//     }

//     return matrix;

// }

// function nuevaFila(columns)
// {
//     var fila =[];

//     for (let c   = 0; c < columns; c++) 
//     {
//            fila.push('X');
//     }
//     return fila;
// }

/* Crear tabla multiplicaciones de 10 *10 con array anidados (matriz) */

function multiplicar(rows, columns) 
{
    var matrizTotal =[];
    
    for (let x  = 1; x <= rows; x++) 
    {
        var rowResult = [];

        for (let y = 1; y <= columns; y++) 
        {
            rowResult.push(x*y);
            
        }
        matrizTotal.push(rowResult);
    }
    return matrizTotal;
}

console.log(multiplicar(10, 10));