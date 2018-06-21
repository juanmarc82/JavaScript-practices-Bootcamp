// function calculateAreaOfSquare(widthHeight) {
//    let square = widthHeight * widthHeight;
//     return square;
// }
// console.log(calculateAreaOfSquare(10));

// const square = function (x) {
//     return x * x;
// }

// console.log(square(12));


function scope(start) 
{
    if (start != undefined){
     let counter = start;
     let c= 0;
     while (counter<10){
        console.log(counter);
        c += counter;
        counter++;
        }return c;
    }
}
console.log(scope(5));

