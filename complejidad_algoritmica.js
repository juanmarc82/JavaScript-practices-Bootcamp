var nombresFila1 = ['Ruben', 'Noelia', 'Mary', 'Javi', 'George'];
var nombresFila2 = ['Jose Antonio' ,'Fran', 'Sergio', 'Jose', 'Fernando'];
var nombresFila3 = ['Juanma', 'Diego', 'Juan Antonio', 'Jesus', 'Alex'];

var nombresClase = [
    ['Ruben', 'Noelia', 'Mary', 'Javi', 'George'],
    ['Jose Antonio' ,'Fran', 'Sergio', 'Jose', 'Fernando'], 
    ['Juanma', 'Diego', 'Juan Antonio', 'Jesus', 'Alex']
 ]

// function pintaNombres(arr){

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             console.log(i + " " + j)
//             console.log(arr[i][j]);
            
//         }
//     }

// }	
// pintaNombres(nombresClase);


function pintaNombresReves(arr){

    for (let i = arr.length-1; i >=0 ; i--) {
        for (let j = arr[i].length-1; j >= 0; j--) {
            console.log(i + " " + j)
            console.log(arr[i][j]);
            
        }
    }

}	
pintaNombresReves(nombresClase);