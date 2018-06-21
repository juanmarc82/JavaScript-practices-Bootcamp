// Set es una clase que tiene JS.
let arr1 =[1, 8, 2, 9, 2, 2, 11, 21, 19, 1, 2, 7, 9];
let set1 = new Set(arr1); // Crea un Set basado en los elementos en el arr1

console.log(arr1.length);
console.log(set1.size);
//Crea un array con los valores en el set1, con operador spread "..."

let arrayOfSet = [...set1.values()];
console.log(arrayOfSet);

let strArray = arr1.join(","); // Concatena todo los elementos en el array y con separador "," ( o el que quieras) .
let strSet = arrayOfSet.join("-"); // Concatena todo los elementos en el array y con separador "-" (o el que quieras)  .
console.log(strArray)
console.log(strSet);


//--------------------------------------------------------------------//

// Union 
// class SetEx extends Set{
//     constructor(...args)
//     {
//         super(...args);
//     }
//     union(setB) {
//         var union = new SetEx(this);
//         for (var elem of setB){
//             union.add(elem);
//         }
//         return union;
//     }
// }
// let s1 = new SetEx([1, 2, 3, 11]);
// let s2 = new SetEx([4, 11, 7, 21, 8]);
// let s3 = new SetEx(s2);
// let s3 = new SetEx(s2);
// console.log(s1);
// console.log(s2);
// console.log(s3);

// Interseccion

// class SetEx extends Set{
//     constructor(...args)
//     {
//         super(...args);
//     }
//     interseccion(setB) {
//         var interseccion = new Set();
//         for (var elem of setB){
//             if (this.has(elem)){
//                 interseccion.add(elem);
//             }
//         }
//         return interseccion;
//     }
//     union(setB) {
//         var union = new SetEx(this);
//         for (var elem of setB){
//             union.add(elem);
//         }
//         return union;
//     }
// }
// let s1 = new SetEx([1, 2, 3, 11]);
// let s2 = new SetEx([4, 11, 7, 21, 8]);
// let s3 = s1.interseccion(s2);
// //console.log(...s3);

// // console.log(s1);
// // console.log(s2);
// console.log(s3);


// Diferencia

class SetEx extends Set{
    constructor(...args)
    {
        super(...args);
    }
    difference(setB){
        var difference = new Set(this);
        for (var elem of setB){
            difference.delete(elem);
        }
        return difference;
    }
    interseccion(setB) {
        var interseccion = new Set();
        for (var elem of setB){
            if (this.has(elem)){
                interseccion.add(elem);
            }
        }
        return interseccion;
    }
    union(setB) {
        var union = new SetEx(this);
        for (var elem of setB){
            union.add(elem);
        }
        return union;
    }
}
// let s1 = new SetEx([1, 2, 3, 11]);
// let s2 = new SetEx([4, 11, 7, 21, 8]);
// let s3 = s1.difference(s2);
//console.log(...s3);

// console.log(s1);
// console.log(s2);
// console.log(s3);

/* Ejercicio:
Crea los tres conjuntos en esta figura

Calcula usando nuestra clase SetEx:
- Vivos que vuelan, son aves y no nadan
-Las aves que vuelan y nadan
- Que nadan pero no son aves
- Que vuelan o nadan y no son Aves*/

let Aves = new SetEx (['avestruz', 'pingüino', 'pato', 'loro']);
let vuelan = new SetEx (['loro', 'pato', 'pez volador', 'mariposa']);
let nadan = new SetEx (['pato', 'pingüino', 'ballena', 'pez volador']);

// let vuelan = SeresVuelan.difference(nadan);
// console.log(Vuelan);
// let VuelanAves = Aves.interseccion(vuelan);
// console.log('Los seres vivos que vuelan, son aves y no nadan es ');
// console.log(VuelanAves);
 
// let VuelaNada = VuelanAves.interseccion(SeresNadan);
// console.log(...VuelaNada);

// console.log('Las aves que vuelan y nadan son ');
// console.log(Vuela);


const avesQueVuelan = Aves.interseccion(vuelan);
const avesQueVuelanNoNadan = avesQueVuelan.difference(nadan);
console.log(...avesQueVuelanNoNadan);

const avesQueVuelanYNadan = avesQueVuelan.interseccion(nadan);
console.log(...avesQueVuelanYNadan);

const nadaNoAves = nadan.difference(aves);
console.log(...nadanNoAves);

const vuelanYNadan = nadan.union(vuelan);
const vuelanYNadanNoAves = vuelanYNadan.difference(aves);
console.log(...vuelanYNadanNoAves);




