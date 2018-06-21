/* 
Ejercicio

Hacer uso del método y los pasos anteriores

Tienes un camioneta que puede cargar y llevar 550 kg.
Recibes una lista (array) de los pesos individuales de los mercancía que tienes que transportar.
Escribe una programa que calcula cuantas veces tienes que ir con tu camioneta para transportar todo los productos en la lista.
Ninguna mercancía pesa mas que 550 kg. */

var mercancia = [40, 100, 20, 500, 230, 10, 78];

function viajesCamion(listaMercancia) {
    var pos=0;
    var vueltasTotal=0;
    var sum=0;
    var maxWeight = 550;
    while (pos <= listaMercancia.length) {
        sum = listaMercancia[pos] + sum;
        if (sum > maxWeight) {
            vueltasTotal++;
        } else {
            pos++;
        }
    }
    return vueltasTotal;
}

console.log(viajesCamion(mercancia));
