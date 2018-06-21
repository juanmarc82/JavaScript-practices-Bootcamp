
const measure = require("measure-duration");

let duration = measure.measureCall(wait, 1.2)



function wait(waitInSeconds) {
    var ahoraMillis = Date.now();
    var tiempoLimite = ahoraMillis + (waitInSeconds * 1000);  // *1000 porque este dato nos lo da en milisegundos y para que sean segundos hay que multiplicar por 1000.
    while (ahoraMillis < tiempoLimite) {
        var falta = tiempoLimite - ahoraMillis;
        ahoraMillis = Date.now(); // Incrementando
    }
}

