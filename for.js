// var numImpares;
// var array=[];
// function cuentaImpares(numeros) {
//     for (index = 1; index <= 31; index+=2) {
        
//          numeros = array[index];
//          numImpares += numeros;
//     }return numImpares
// }

// console.log(cuentaImpares(31));

/*Muestra los numeros impares desde 0 a 31 usando for (no hace falta una función*/

// for (numero = 1; numero <= 31; numero +=2 ) {
//         console.log(numero);       
// }
/* 
Tienes un array con nombres como esta:
var nombres =['Mary', 'Ana, Belinda', 'Maria']
Con un bucle for encuentra tosos los nombres que empieza con 'M' e imprimelas en consola */

// var nombres =['Mary', 'Ana', 'Belinda', 'Maria'];

// for (i = 0; i < nombres.length; i++) {
//     var nombre = nombres[i];
//     if (nombre[0] === 'M') {
//         console.log(nombre); 
//     }
// }

/* Crea una funcion que recibes un array y retorna una copia de esa array.
Asi crea otro array para retornar.
Usando bucle for copia cada elemento del array recibido y añadelo al nuevo array con metodo push(...)
Al final retorna el nuevo array*/


// var arrayOriginal = ['Mary', 'Ana', 'Belinda', 'Maria'];
// function copiarArray(parametro) {
//     var arrayDestino = [];
//     for (i = 0; i < parametro.length; i++) {
//         arrayDestino.push(arrayOriginal[i]);        
//     }
//     return arrayDestino;
// }
// console.log(copiarArray(arrayOriginal));


/* Igual que el anterior pero al reves. Que empiece por el ultimo y acabe en el primero. Nota: usando push(...)*/

// var arrayOriginal = ['Mary', 'Ana', 'Belinda', 'Maria'];

// function invertirArray(array) {
//     var arrayInvertido =[];
//     for (i = array.length - 1; i >= 0 ; i--) {
//         arrayInvertido.push(array[i]);
//     }
//     return arrayInvertido;
// }
// console.log(invertirArray(arrayOriginal));

/* 
Tienes una camioneta que puede cargar y llegar 550kg.
recibes una cola(array) de los pesos individuales de las mercancias que tienes q transportar
Escribe una funcion que calcula cuantos productos puedes lllegar en tu camioneta la primera vuelta, sacando mercancia en orden de la cola.camioneta
Ninguna mercancia pesa mas de 550kg.camionetausa bucle for y break en funcion. */

var mercancias = [300, 200, 50, 100, 20, 80,];

function calculaProductos(listaMercancia) {
    var productosTotal = 0;
    var pesoMax = 550;
    for (i = 0; i < listaMercancia.length; i++) {
        productosTotal += listaMercancia[i];
        if (productosTotal > pesoMax) {
            break;
        }
    }
    return i;
}

console.log('Los productos total en el primer viaje son ' + calculaProductos(mercancias));

//Otra forma de hacerlo:
/* function calculaProductos(listaMercancia) {
    var productosTotal = 0;
    var pesoMax = 550;
    var productosMetidos =0;
    for (i = 0; i < listaMercancia.length; i++) {
        productosTotal += listaMercancia[i];
        if (productosTotal <= pesoMax) {
            productosMetidos++;
        }
        else{
            break;
        }
    }
    return productosMetidos;
}

console.log('Los productos total en el primer viaje son ' + calculaProductos(mercancias)); */



/* Igual que el anterior pero que cuente cuantas vueltas necesita la furgoneta para transportar toda la mercancía, sin sobrepasar los 550 kg por viaje. */

/* var mercancias = [300, 200, 50, 100, 20, 80,];

function calculaVueltas(listaMercancia) {
    var pesoTotal = 0;
    var pesoMax = 550;
    for (i = 0; i < listaMercancia.length; i++) {
        pesoTotal += listaMercancia[i];
        if (pesoTotal>=pesoMax) {
            break;
        }
    }
    return i;
}

console.log('Los viajes totales para transportar los productos son ' + calculaVueltas(mercancias)); */