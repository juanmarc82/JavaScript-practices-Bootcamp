//  Algoritmos y funciones recursivas.
//La funcion o solucion se llama a si misma
// Tiene similaridad de bucles porque se repiten.

// function printUntil(number, max) {
//     if(number<=max){
//         console.log(number);
//         printUntil(number+1, max); //number+1 hace que incremente 1 cada vuelta el parametro number.
//     }
//     else
//         return;
// }

// printUntil(15,13000);

// Ejercicio
// USa solo una funcion recursiva de tu creacion para calcular
// el resiltado de n elevado a la potencia de x
// La llamada sera algo asi
//console.log(exp(n,x));
//console.log(expo(2,10)); 1024
// no usar bucles, ni while ni for.

/* function exp(n,x) {
    if (x == 0) 
    {
        return 1;
    }
    else if(x == 1){
        return n;
    }
    else{
        return n * exp(n, x - 1);
    }
}

console.log(exp(2,3));
 */

 /* ejercicio
 usa solo una funciuon recuirsiva de tu creacion para calcular y retornar la suma de los numeros de n hasta m
 la llamada sewra algo asi
 console.log(sumNtoM(1,10))//55
 no puedes usar bucles ni while ni for */

 function sumNtoM(n,m)
 {
     if (n==m)
    {
        return n;
    }
    else 
        return n + sumNtoM(n+1,m);
}


 console.log(sumNtoM(1,10));

 /* Ejercicio
 const lista =["This", "should", "become", "a", "sentence"]
 Crea funcion recursiva, que recibe esa list y retorna un string que es la frase
 completa "This should become a sentence".
 No usar bucles ni while ni for. */

 const lista =["This", "should", "become", "a", "sentence"];

function retornSentence(x, array) {
    
    if (x == array.length) {
        return "";
    }
    else 
        return array[x] + " " + retornSentence(x+1, array);
}
 

console.log(retornSentence(0, lista));
