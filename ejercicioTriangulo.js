// Ejercicio Pintar Triángulo.
//  var stringTotal = "";
// var texto = "#";

// for (let vuelta = 0; vuelta < 7; vuelta++) {
    
//     stringTotal += texto + "\n";
//     texto = texto + "#";
    
// }
// console.log(stringTotal);


//Ejercicio indentation ( Pintar espacios (o lo que sea)).

// function indentation(ident) {
//     var string = "";
//     for (let vuelta = 0; vuelta < ident; vuelta++) {
//         string += " ";        
//     }
//     return string;
// }







// console.log("\"" + indentation(5) + "\"");
// console.log(indentation(5).length == 5);

// Vamos a pintar un rectángulo:

// var rectangle = 
//     "\n" +
//     "\n" +
//     "\n" +
//     "\n" +
//     "     **********\n" +
//     "     *        *\n" +
//     "     *        *\n" +
//     "     *        *\n" +
//     "     *        *\n" +
//     "     **********\n";

// console.log(rectangle);



// function rectangulo(ancho, alto) {
//     var x = 0;
//     var y = 0;
    
// }

// function indentation(ident) {
//     var string = "";
//     for (let vuelta = 0; vuelta < ident; vuelta++) {
//         string += " ";        
//     }
//     return string;
// }

// var rectangle2 = 
//     "\n" +
//     "\n" +
//     "\n" +
//     "\n" +
//     indentation(10)  +  "     **********\n" +
//     indentation(10)  +  "     *        *\n" +
//     indentation(10)  +  "     *        *\n" +
//     indentation(10)  +  "     *        *\n" +
//     indentation(10)  +  "     *        *\n" +
//     indentation(10)  +  "     **********\n";

//     console.log(rectangle2);
    

/* Ejercicio
Crea una función indentedRectangle que recibe un parámetro X con el numero de caracteres de espacios.
Retorna el string con el rectangulo2 movido al derecha X espacios. */

// function indentation(ident) {
//     var string = "";
//     for (let vuelta = 0; vuelta < ident; vuelta++) {
//         string += " ";        
//     }
//     return string;
// }

// function indentedRectangle(spcs) {
    
//     var rectangle2 = 
//     "\n" +
//     "\n" +
//     "\n" +
//     "\n" +
//     indentation(spcs)  +  "     **********\n" +
//     indentation(spcs)  +  "     *        *\n" +
//     indentation(spcs)  +  "     *        *\n" +
//     indentation(spcs)  +  "     *        *\n" +
//     indentation(spcs)  +  "     *        *\n" +
//     indentation(spcs)  +  "     **********\n";

//     console.log(rectangle2);
//     return rectangle2;
// }   

// indentedRectangle(25);

/* Ejercicio 

Crea un bucle for que da 20 vueltas.
Dentro del bucle:
Llama tu función indentedRectangle con el contador del bucle como parámetro. Guarda el string en un variable.
Imprime el string en la consola.
Hace tu bucle esperar 1 segundo, usando el wait(1)
Limpia la consola con console.clear();
Animación... */

function indentation(ident) {
    var string = "";
    for (let vuelta = 0; vuelta < ident; vuelta++) {
        string += " ";        
    }
    return string;
}
function indentationlateral(ident) {
    var string = "";
    for (let vuelta = 0; vuelta < ident; vuelta++) {
        string += " \n";        
    }
    return string;
}


function indentedRectangle(spcs) {
    
    var rectangle = 
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    indentationlateral(spcs) +
    indentation(spcs)  +  "     *****************\n" +
    indentation(spcs)  +  "     *               *\n" +
    indentation(spcs)  +  "     *               *\n" +
    indentation(spcs)  +  "     *      mueve    *\n" +
    indentation(spcs)  +  "     *       tu      *\n" +
    indentation(spcs)  +  "     *      cucu     *\n" +
    indentation(spcs)  +  "     *       !!      *\n" +
    indentation(spcs)  +  "     *               *\n" +
    indentation(spcs)  +  "     *               *\n" +
    indentation(spcs)  +  "     *****************\n";

    //console.log(rectangle2);
    return rectangle;
}   


function mueveRect(espRect) {
    for (let i = 0; i < espRect; i++) {
        let rectangle2 = indentedRectangle(i);        
        console.log(rectangle2);
        console.log(rectangle2);
        wait(1);
        console.clear();                
    }
    // return rectangle2;
}
mueveRect(20);

// wait(6);
// console.clear();


function wait(waitInSeconds) {
    var ahoraMillis = Date.now();
    var tiempoLimite = ahoraMillis + (waitInSeconds * 1000);  // *1000 porque este dato nos lo da en milisegundos y para que sean segundos hay que multiplicar por 1000.
    while (ahoraMillis < tiempoLimite) {
        // var falta = tiempoLimite - ahoraMillis;
        // if (falta % 100 == 0) {
        //     console.clear();
        //     console.log("\n\n\n\n\n\t\t\t" + falta / 1000);
        // }
        ahoraMillis = Date.now(); // Incrementando
    }
}



/* Animación... 

Pintar el rectángulo
Esperar un segundo
Limpiar consola
Mover el rectángulo una posición a la derecha
Pintar el rectángulo nuevo
Esperar un segundo
Volver a punto 3.
 */

