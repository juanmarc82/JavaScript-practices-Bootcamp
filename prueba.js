

// 1.1 Dos maneras de iterar "keys" y "values"
console.log("\n////////////Ejercicio 1.1/////////////\n")
var persona = {

    nombre:"Javier",
    apellidos: "Franco",
    edad:"35",
    familia:{
        mujer:"Dao",
        perro:"PomPom",
        primo:"Jesus"
    },
    amigos: ["Sergio", "Ramon", "Pablo", "Sebas", "Jose Luis"]
}

Object.keys(persona).forEach(function(keys){
    console.log(keys , " - ", persona[keys])
});

console.log("\n////////////Ejercicio 1.1.1/////////////\n")

for(key in persona) {
    console.log(key, " - ", persona[key])
 }


 //1.2 Recorrer objeto Familia usando funcion JSON.stringfy
 console.log("\n////////////Ejercicio 1.2/////////////\n")

 console.log(JSON.stringify(persona["familia"]));


 
 //2 Recorrer objeto Familia usando funcion JSON.stringfy
 console.log("\n////////////Ejercicio 2/////////////\n")

 for(key in persona){
     console.log(typeof(persona[key]));
 }


 //3 Usar recursividad en los objetos dentro de objetos    https://www.codifica.me/funcion-recursiva-sobre-json-con-javascript/
 console.log("\n////////////Ejercicio 3/////////////\n")

 function recorrerObjetos(persona){
    for(key in persona){
        if(typeof(persona[key]) === "object"){
            console.log(persona[key]);  
        }
    }
} 
recorrerObjetos(persona);








// var arbol =  [	{"id":1, "code":1,"hijos":  [
//                                                 {"id":11,"code":11},
//                                                 {"id":12,"code":12}] },
//                 {"id":2, "code":2, "hijos": [
//                                             {"id":21,"code":21},
//                                             {"id":22,"code":22, "hijos": [
//                                                                             {"id":221,"code":221},
//                                                                             {"id":222,"code":222} ]	}
//     ] } ]


// function recorrerArbol(arbol){
//     var type;
//     var resultado;

//     for (var i=0; i>arbol.length; i++){
//         type = typeof arbol[i].hijos;
//         if (type=="undefined"){
//             resultado = true;					
//             console.log(arbol[i].id);
//         }else{
//             console.log(arbol[i].id);
//             resultado = recorrerArbol(arbol[i].hijos);
//         }
//     } 
//     return resultado;       
// }