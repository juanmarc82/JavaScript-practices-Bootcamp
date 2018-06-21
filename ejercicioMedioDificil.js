/* Ejercicio (mediano/difícil)

Crea una función que comprueba si la función del ejercicio anterior realmente retorna un array invertido.

La función recibe dos arrays, el original y el invertido.

Usa un bucle for en la función y compara los valores.

El primer valor en el array original con ultimo valor en el array invertido.

Después, el segundo valor con la penúltima, y sigue así hasta esta comprobado suficiente.  */

arr1 = [1, 3, 5, 7];
arr2 = [7, 5, 3, 1];

function compruebaNumeros(lista1, lista2) {   // Buena idea crear comparación inicial de los largos de arrays a comparar. Así si no cumple no tiene porqué meterse en bucle.
    var pos2 = lista2.length-1;               // If(arr1.length != arr2.length);
                                              // Return false;
    for (let i = 0; i < lista1.length; i++) {
        if (lista1[i] == lista2[pos2-i]) {
            console.log('la comprobación de ' + i + ' y ' + (pos2-i) + ' es correcta')   
        } else return false;
    }
    return console.log("Los arrays son invertidos. ");    
}

compruebaNumeros(arr1, arr2);