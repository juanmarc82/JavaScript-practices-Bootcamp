//Ejercicio: Sucesión de Fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,...
//Cada numero es la suma de los dos anteriores (excluido 1 y 0)
//



function fib(number) {    
    if (number<2) 
    {
        return number;
    } else
    {
       return fib(number-2) + fib(number-1);
    }    
}

console.log(fib(10));



