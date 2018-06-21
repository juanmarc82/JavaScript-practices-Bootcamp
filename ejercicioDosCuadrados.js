function indentation(ident) {
    var texto = "";
    for (var vuelta = 0; vuelta < ident; vuelta++) {
        texto = texto + " ";
    }
    return texto;
}


function newlines(ident) {
    var texto = "";
    for (var vuelta = 0; vuelta < ident; vuelta++) {
        texto = texto + "\n";
    }
    return texto;
}

var rectangle = [
    "",
    "",
    "",
    "",
    "       **********",
    "       *        *",
    "       *        *",
    "       *        *",
    "       *        *",
    "       **********",
].join("\n");

var rectangle2 = [
    "",
    "",
    "",
    "",
    indentation(5) + "       **********",
    indentation(5) + "       *        *",
    indentation(5) + "       *        *",
    indentation(5) + "       *        *",
    indentation(5) + "       *        *",
    indentation(5) + "       **********",
    "",
    "",
    "",
    "",
].join("\n");

function indentedRectangle(x)
{
    var rectangleIndented = [
        newlines(x),
        indentation(x) + "**************",
        indentation(x) + "*            *",
        indentation(x) + "*    YES     *",
        indentation(x) + "*            *",
        indentation(x) + "*            *",
        indentation(x) + "**************",
        "",
    ].join("\n");
    return rectangleIndented
}
function wait(waitInSeconds) {
    var ahoraMillis = Date.now();
    //5 segundos en el futuro
    var tiempoLimite = ahoraMillis + (waitInSeconds * 1000);

    while (ahoraMillis < tiempoLimite) {
        ahoraMillis = Date.now(); //Incrementando
    }
}

for (let i = 0; i < 40; i++) {
       
    var cuadroDePintar = indentedRectangle(i);
    console.log(cuadroDePintar);
    wait(0.14);
    console.clear();
 
}