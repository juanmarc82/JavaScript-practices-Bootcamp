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


function hombre1(spcs) {
    
    var movimiento1 = 
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    indentation(spcs)  +"   â–ˆ   \n" +
    indentation(spcs)  +"  /| |\\ \n" +
    indentation(spcs)  +" / | |   \n" +
    indentation(spcs)  +"   / |   \n" +
    indentation(spcs)  +"  /_ |_  \n" ;

    return movimiento1;
}

function hombre2(spcs) {
    
    var movimiento2 = 
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    indentation(spcs)  + "   â–ˆ  \n" +
    indentation(spcs)  + " |\\|\\ \n" +
    indentation(spcs)  + " | \\ \\\n" +
    indentation(spcs)  + " | \\   \n" +
    indentation(spcs)  + " |_ \\_ \n" ;

    return movimiento2;
}   


function mueveHombre(espRect) {
    for (let i = 0; i < espRect; i++) {
        let rectangle2 = hombre1(i);        
        console.log(movimiento1);
        wait(1);
        console.clear();
        console.log(movimiento2);
        wait(1); 
        console.clear();               
    }
    // return rectangle2;
}
mueveHombre(30);

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
