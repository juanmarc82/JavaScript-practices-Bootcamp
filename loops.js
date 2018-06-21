// var counter = 0;

// var sum = 0;

// while (counter < 10) {
//     sum += counter++;
// }
// console.log(sum);


// while (counter < 10) {
//     sum += counter;
//     console.log("Result " + counter + " : " + sum);
//     counter++;
// }

var numberOfItems = 0;

var myList = {};
myList[numberOfItems++] = "First";         // Declaro variable = 0; declaro otra variable = vacía "{}"; declaro valor variable myList va a ser el valor de la variable
myList[numberOfItems++] = "Second";        // nomberOfItems sumandole 1 en cada caso.(Como lo he escrito 4 veces y va desde el valor 0, llegará al 3)
myList[numberOfItems++] = "Third";         
myList[numberOfItems++] = "Fourth";

var pos = 0;                               // Declaro variable "pos" con valor 0
while (pos<numberOfItems) {                //Declaro while y le digo: Mientras variable pos sea inferior a variable numberOfItems haga lo siguiente:
    console.log(myList[pos]);              //muéstrame el valor de la variable myList cuando la variable pos valga 0, incrementándola 1 cifra cada vuelta (loop), hasta el valor máximo de
    pos++;                                 //la variable numberOfList, que era hasta el 3 (0, 1, 2, 3)
}