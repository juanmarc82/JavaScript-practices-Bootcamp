// Ejercicio Array DNI 

// var letrasDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

// function dameLetra(dni) {
//     var letra = dni %22;
//     console.log(' Mi Dni es ' + dni + ' y la letra es ' + letrasDni[letra]); 
// }

// dameLetra(74868721);

// Ejercicio Array 2

var valorNotas = [5.00, 4.30, 2.3, 7.80, 9.00, 5.65, 4.98, 7.20, 6.00, 9.00, 10.00];
var alumno = ['Juan', 'Victor', 'Ramon', 'Javier', 'Pablo', 'Jose', 'Paco', 'pepito', 'Antonio', 'Josema'];
var resultadoNota = [];
var contador = 0;

function asignaNota(valorNotas) {
        while (contador <= alumno.length) {
        if (valorNotas <= 4.99 ) {
            resultadoNota.push('Suspenso');
        }if (valorNotas >= 5 && valorNotas <= 6.99 ) {
            resultadoNota.push('Bien');
        } if (valorNotas >= 7 && valorNotas <= 8.99) {
            resultadoNota.push('Notable');
        } if (valorNotas >= 9 && valorNotas <=10){
            resultadoNota.push('Sobresaliente');
        }
        contador++;
    } return resultadoNota;
}


contador = 0;
function ensenaNota(datos) {
    while (alumno < 10) {
        if (alumno == alumno[1]) {
            console.log()
        }
    }
}
