/* eslint-disable*/

// function getColorStringFromCode(colorNumber) {
//     if (colorNumber == 0) //Numeric code for Red
//     {
//         return "Red";
//     }
//     else if (colorNumber == 1) //Numeric code for Green
//     {
//         return "Green";
//     }
//     else if (colorNumber == 2) //Numeric code for Blue
//     {
//         return "Blue";
//     }
//     else if (colorNumber == 3) //Numeric code for Pink
//     {
//         return "Pink";
//     }
//     else if (colorNumber == 4) //Numeric code for Brown
//     {
//         return "Brown";
//     }
//     else if (colorNumber == 5) //Numeric code for Black
//     {
//         return "Black";
//     }
//     else if (colorNumber == 6) //Numeric code for White
//     {
//         return "White";
//     }
//     else if (colorNumber == 7) //Numeric code for Gray
//     {
//         return "Gray";
//     }
//     else {
//         return undefined;
//     }
// }

// function getColorStringFromCode2(colorNumber) {
//     var colorName;
//     switch (colorNumber) {
//         case 0:
//             colorName = "Red";
//             break;
//         case 1:
//             colorName = "Green";
//             break;
//         case 2:
//             colorName = "Blue";
//             break;
//         case 3:
//             colorName = "Pink";
//             break;
//         case 4:
//             colorName = "Brown";
//             break;
//         case 5:
//             colorName = "Black";
//             break;
//         case 6:
//             colorName = "White";
//             break;
//         case 7:
//             colorName = "Gray";
//             break;
//         default:
//             colorName = undefined;

//     }
//     return colorName;
// }

// console.log(getColorStringFromCode(0) + " = " + getColorStringFromCode2(0));
// console.log(getColorStringFromCode(1) + " = " + getColorStringFromCode2(1));
// console.log(getColorStringFromCode(2) + " = " + getColorStringFromCode2(2));
// console.log(getColorStringFromCode(3) + " = " + getColorStringFromCode2(3));
// console.log(getColorStringFromCode(4) + " = " + getColorStringFromCode2(4));
// console.log(getColorStringFromCode(5) + " = " + getColorStringFromCode2(5));
// console.log(getColorStringFromCode(6) + " = " + getColorStringFromCode2(6));
// console.log(getColorStringFromCode(7) + " = " + getColorStringFromCode2(7));
// console.log(getColorStringFromCode(8) + " = " + getColorStringFromCode2(8));



// // Ejercicio Switch

// function evaluaNotas(nota) {
//     var calificacion;
//     switch (nota) {
//         case 0:
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//             calificacion = "Insuficiente";            
//             break;
//         case 5:
//             calificacion = "Suficiente";
//             break;
//         case 6:
//         case 7:
//             calificacion = "Bien";
//             break;
//         case 8:
//         case 9:
//             calificacion = "Notable";
//             break;
//         case 10:
//             calificacion = "Sobresaliente"
//             break;
//         default:
//             calificacion = undefined;
//               }
//     return calificacion    
// }

// console.log(evaluaNotas(8) + " = " + evaluaNotas(9));
// console.log(evaluaNotas(3));
// console.log(evaluaNotas(1) + " =/ " + evaluaNotas(5)) ;


//sumar 1 valor a una variable definida de forma consecutiva;

// var myList = {};  // declaro una variable pero VACÍA!! así le puedo dar valores después.

// myList[0] = "First"; //aquí declaro que el valor de myList va a ser cero, pero en número, y lo hago entre [] porque los números no puedo ponerlo tras un "."(punto)
// myList[1] = "Second";
// myList[2] = "Third";
// myList[3] = "Fourth";


// var pos = 0;  // Declaro otra variable con valor inicial 0.
// console.log(myList[pos++]);
// console.log(myList[pos++]);

// function esVerdad (string) {
//     if (string == 'verdad') {
//         return true;
//     }else {
//         return false;
//     } 
// }
// console.log(esVerdad('verd'));

// Ejercicio 2

// function esVerdad(string) {
//     if (string == 'verdad') {
//        return true; 
//     }else if (string == 'falso') {
//         return false;
//     } else  {
//         return undefined;
//     }
// }

// console.log(esVerdad('falso'));


// Ejercicio 


// var dayNumber = 6;
// var dayName;

//  switch (dayNumber) {
//         case 1:
//         dayName = 'Lunes';
//         break;
//         case 2:
//         dayName = 'Martes';
//         break;
//         case 3:
//         dayName = 'Miércoles';
//         break;
//         case 4:
//         dayName = 'Jueves';
//         break;
//         case 5:
//         dayName = 'Viernes';
//         break;
//         case 6:
//         dayName = 'Sábado';
//         break;
//         case 7:
//         dayName = 'Domingo';
//         break;
//         default:
//         dayName = undefined;
//         break;
// } 

// console.log('El dia nº ' + dayNumber + ' de la semana es ' + dayName);

// Ejercicio

// var diaSemana;


// function queHago(diaSemana) {
//     var resultado;
//     switch (diaSemana) {
//         case 1 :
//         case 2 :
//         case 3 :
//         case 4 :
//         case 5 :
//             resultado = 'Te jodes, a currar!! ';
//             break;

//         case 6 :
//         case 7 :
//             resultado = 'Disfruta perraaaaaa!!';
//             break;
//         default:
//             resultado = 'Estás empanao ¡Mete un valor!';
//             break;
//     } return resultado;
// }

// console.log(queHago(2));

// Ejercicio

var diaSemana;
function queHago(diaSemana) {
    var resultado;
    switch (diaSemana) {
        case 1 :
        case 2 :
        case 3 :
        case 4 :
        case 5 :
            resultado = ' currar!! ';
            break;

        case 6 :
        case 7 :
            resultado = 'Disfrutar ';
            break;
        default:
            resultado = 'Estás empanao ¡Mete un valor!';
            break;
    } return 'Hoy te toca ' + resultado;
}

console.log(queHago(6));