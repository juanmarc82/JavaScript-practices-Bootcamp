// var ahora = new Date();
// console.log(ahora);
// console.log(ahora.toLocaleTimeString());
// console.log(ahora.getDate()); //12
// console.log(ahora.getMonth());//1 ¡Ojo,, meses del año 0-11!

// console.log(Date.now()); // Devuelve el numero de milisegundos transcurridos desde las 00:00:00 del 01-01-1970 hasta el momento de solicitarlo.

// Hacer un programa que espere un tiempo

// var ahoraMillis = Date.now();

// //5 segundos en el futuro.
// var tiempoLimite = ahoraMillis + (5 * 1000);
// console.log("Empezar la espera.. ");

// while (ahoraMillis<tiempoLimite) {   //Condicion
//     ahoraMillis=Date.now();
// }

// console.log("Terminó la espera...");
// console.clear()     // Esto limpia la consola.

/* Ejercicio.
Crea una funcion wait que recibe un numero entero X representando un segundo.

La funcion debe hacer que tu programa "esperar" X segundos cuando llama tu funcion antes de seguir.
Comprueba tu funcion llamandola así:
console.log("Empezar la espera...");
wait(5)
console.log("Terminó la espera...")*/



/* function wait(tiempo) {
    var vueltas=0;
    var ahoraMillis = Date.now();
    var tiempoLimite = ahoraMillis + (tiempo * 1000);
    while (ahoraMillis<tiempoLimite) {   //Condicion
        ahoraMillis=Date.now();
        vueltas++;            
        }
        return;
}



console.log("Empezar la espera...");
wait(1);
console.log("Terminó la espera..."); */

// console.log(vueltas);




/* function cuentaAtras(tiempo) {
    var tiempoAhora = Date.now();
    var tiempoLimite = tiempoAhora + (tiempo *1000);
    while (tiempoAhora<tiempoLimite) {
        if (tiempoAhora++) {
            console.log(Date.now(tiempo/1000));
        }
              
    }
}

console.log("Empezar la espera...");
cuentaAtras(5);
console.log("Terminó la espera..."); */


wait(6);
console.clear();
console.log("\n\n\n\n\n\t\t\tBOOOOOOOOOOOMMMM!!\n\n\n\n\n\n\n");

function wait(waitInSeconds) {
    var ahoraMillis = Date.now();
    var tiempoLimite = ahoraMillis + (waitInSeconds * 1000);  // *1000 porque este dato nos lo da en milisegundos y para que sean segundos hay que multiplicar por 1000.
    while (ahoraMillis < tiempoLimite) {
        var falta = tiempoLimite - ahoraMillis;
        if (falta % 100 == 0) {
            console.clear();
            console.log("\n\n\n\n\n\t\t\t" + falta / 1000);
        }
        ahoraMillis = Date.now(); // Incrementando
    }
}