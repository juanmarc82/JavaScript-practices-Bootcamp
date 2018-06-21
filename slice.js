/* DIVIDIR UN ARRAY
Con la propiedad .slice(x, y) o .slice(x) divides un array desde x hasta y en el primer caso, o desde x al final en el segundo caso */

//Ejemplo

// const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const part1 = arr1.slice(0, 8); // Desde posicion 0 hasta los 8 elementos siguientes.

// const part2 = arr1.slice(8); // desde posicion 8 hasta el final.

//Desde posicion 8 hasta el final que es length -1 (.length nos da el total al cual le podemos restar alguna cifra
// en este caso como hay 10 nos resta 1 desde el final hacia el principio.)
/* NOTA: Con eso le decimos que empiece desde el final hacia el principio descontando x numeros. */
// const part2b = arr1.slice(8, arr1.length - 1);

// console.log(part1);
// console.log(part2);
// console.log(part2b);


// Ejercicio
/* Divide un array en dos partes iguales */
const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const partA = arr1.slice(0, Math.round(arr1.length/2));

const partB = arr1.slice(Math.round(arr1.length/2));

console.log(...partA); // los "..." puntos crean un conjunto de valores ("spread" "..." crea un array con los valores del conjunto (set))
console.log(partB); // nota la diferencia en el depurador.
