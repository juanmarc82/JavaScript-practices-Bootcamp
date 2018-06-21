function callback() 
{
    console.log("Callback called");
}
setTimeout(callback, 3000);

setTimeout(function()
{
    console.log("2 segundos");

}, 2000);

setTimeout(()=>{     // "()=>" es igual que "function ()" (ES6)
    console.log("Despues de 1 segundo");
}, 1000);

console.log("setTimeout llamado 3 veces...");
