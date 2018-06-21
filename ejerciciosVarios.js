// Ejercicio con While.
// Crea una función que recibe uin numero max como parámetro.

//La función debe utilizar un bucle 'while' y sumar todos los numeros impares desde 1 hasta max incluido (si max es impar)
// La función debe retornar la suma acumulada.

// function sumaImpar(max) {          // Se puede hacer con if como en este caso, o sin él como en el ejercicio de abajo.
//     var suma = 0;
//     var numActual = 1;
//     while (numActual <= max) {
//         if (numActual %2 != 0) {    //Esto se puede cambiar por una operación que vaya sumando de 2 en 2 desde 1, así dejaría los impares solo también.
//             suma += numActual;      // La hago más abajo.
//         }                          
//         numActual++;
//     }
//     console.log('La suma de los nº impares del nº ' + max + ' es ' + suma); 
//     return suma; 
// }

// sumaImpar(50);

// function sumaImpar(max) {
//     var suma = 0;
//     var numActual = 1;
//     while (numActual <= max) {
//         suma += numActual
//          numActual += 2;         //Esto se puede cambio por una operación que vaya sumando de 2 en 2 desde 1, así dejaría los impares solo también.
//     }                             //Para ello deberíamos quitar el if y dejar solo while.                         
//     console.log('La suma de los nº impares del nº ' + max + ' es ' + suma); 
//     return suma; 
// }
    
// sumaImpar(50)

// Ejercicio con While.
// Crea una función que recibe uin numero max como parámetro.

//La función debe utilizar un bucle 'while' y sumar todos los numeros pares desde  hasta max incluido (si max es impar)
// La función debe retornar la suma acumulada.



/* function sumaPar(max) {
    var suma = 0;
    var numActual = 2;
    while (numActual <= max) {
        suma += numActual
         numActual += 2;         //Esto es  una operación que vaya sumando de 2 en 2 desde 2, así dejaría los pares solo.
    }                                                     
    console.log('La suma de los nº pares del nº ' + max + ' es ' + suma); 
    return suma; 
}
    
sumaPar(10)
    */

// Ejercicio Bucle con Array

/* var myArray = ['Menorca', 'Ibiza', 'Cabrera', 'Formentera', 'Mallorca'];
var pos = 0;
    
while (pos < myArray.length) {
        console.log(myArray[pos]);
        pos++;
} */

// Ejercicio

//Crea una funcion que recibe un numero del 1 al 7 como parámetro y representando los días de la semana.
//En la función, declara un array que contiene los nombres de los días de la semana, "Lunes", "Martes", ...
// La función debe retornar el bombre del día (el string), que corresponde al número recibido como parámetro.
// Pista: no hace bucle.


/* function dimeDia(numDia) {
    var diasArray = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    return diasArray = [numDia - 1];   
}

console.log(dimeDia(6)); */

/*Crea una funcion que recibe un stringf como parametro y contiene un bombre de uno de los dias de la semana como 'Martes'.
En la funcion, declara un array que contiene los nombres de los dias de la semana, 'Lunes', 'Martes',...
La funcion debe retornar el numero del dia de la semana que corresponde al nombre recivido como parametro.
Ejemplo, si el string en el parametro es 'Viernes' la funcion debe recortar 5.*/

/* function queDia (nombreDia) {
    var diasArray = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    var pos = 0;
    while (pos < diasArray.length) {
        if (nombreDia == diasArray[pos]) {
            return pos + 1;
        }
        pos++;
    }
}

// console.log(queDia('Martes'));
console.log('El string ' + queDia('Martes') + ' es igual al numero de dia ' + queDia('Martes')); */
/* 
//Crea una funcion que recibe un string como parametro y cont9ene nombre de unos de los dias de la semana como 'Martes'.
En la funcion declara un objeto que tiene como propiedades los nombres de los dias de la semana 'lunes', 'martes',...
El valor de cada propiedad 'dia' contiene el correspondiente numero de la semana (obj.Martes = 2)
La funcion debe retornar el numero del dia de la semana que corresponde al nombre recibido como parametro.

Ejemplo, si el string en el parametro es 'Viernes' la funcion debe retornar 5
Pista: usa notación corchetes.*/

/* function ordinalOfWeekDay(nameOfDay) {
    var weekDays = {Lunes:1, Martes:2, Miercoles:3, Jueves:4, Viernes:5, Sabado:6, Domingo:7}
    return weekDays[nameOfDay]
}

console.log(ordinalOfWeekDay('Jueves')); */

/* Crea una funcion que recibe un array como parametro y retorna una copia de esa array
La funcion debe retornar un nuevo array que contiene los mismos elementos que el array recibido y en el mismo orden

pistas: Crea otro array para retornar. Usando un bucle while y coipia cada elemento recibido, y añadirlo al nuevo array con el metodo push(...)
Al final retorna el nuevo array*/

/* function copiaArray(arrayRecibido) {
    var arrayDestino =[];
    var pos = 0;
    while (pos < arrayRecibido.length) {
        arrayDestino.push(arrayRecibido[pos]);
        pos++;
    }
    
    return arrayDestino;

}
var arrayOrigen = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

console.log(copiaArray(arrayOrigen)); */

/* Ejercicio.
DEclara una funcion que recibes un array de numeros
La funcion deberia retornar otro array que solo contiene los numeros impar del array recibido. */
/* var arraynumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numImpar(arrNum) {
    var arrImpar = [];
    var pos = 0;
    while (pos < arrNum.length) {
        if (arrNum[pos] %2 != 0) {
            arrImpar.push(arrNum[pos]);
            
        }
        pos++;
    }
    return arrImpar;
}

console.log(numImpar(arraynumeros)); */


/* Ejercicio.
DEclara una funcion que recibes un array de numeros
La funcion deberia retornar otro array con los mismos elementos pero en orden invertido.

Así, si recibes un array  con [1,2,3,4,5] debe retornar un array [5, 4, 3, 2, 1]
pista: usa while y unshift(...) del nuevo array*/

var arraynumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numInv(arrNum) {
    var arrInv = [];
    var pos = 0;
    while (pos < arrNum.length) {
        arrInv.unshift(arrNum[pos]);
        pos++;
    }
    return arrInv;
}

/* console.log(numInv(arraynumeros)); */


/* var arrInv = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]; */

function numOrd(arrNum) {
    var arrOrd = [];
    var pos = arrNum.length - 1;
    while (pos >= 0) {
        arrOrd.push(arrNum[pos]);
        pos--;
    }
    return arrOrd;
}

console.log(numOrd(numInv(arraynumeros)));