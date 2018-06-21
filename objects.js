/* var myObj = {};
console.log(typeof myObj);


myObj.name = "Juanma";
myObj.age = 35;

console.log(myObj.name);
console.log(myObj.name + " tiene " + myObj.age + " años. ");
 */

/* const Sueco = "Sueco";
var myObj2 = { name: "Juanma", age: 35};

console.log(myObj2.name + " tiene " + myObj2.age + " años. ");
var myObj3 = {
    name: "Juanma",
    age: 35,
    licencia: Sueco
};

console.log(myObj3.name + " tiene " + myObj3.age + " años. ");
 */

/* var myAnimal1 = {
    alive : true,
    type : "Cat",
    weight : 5,
    }
var myAnimal2 = {
    alive : false,
    type : "Dog",
    weight : 15,

    }
var myAnimal3 = {
    alive : false,
    type : "Rat",
    weight : 1,
    }

console.log(" My animal " + " is a " +  myAnimal1.type + " and is " + myAnimal1.alive + ". It´s weight is " + myAnimal1.weight); */


/* Funciones 
   Encapsula la funcionalidad
   Puede o no recibir datos(parámetros)
   Puede o no retornar algo, valor, u otro objeto
   Se puede llamar para ejecutar su funcionalidad

   function isEven(number)
   {
       return number % 2 == 0;
   }
   console.log(isEven(4));
   console.log(isEven(5));
   */
  
 /*  function isEven(number)
  {
      return number % 2 == 0;
  }
  console.log(isEven(4));
  console.log(isEven(5)); */

 /*  Ejemplo de una función que puede tener 0 o más parámetros.de */
  /* function sayHello()
  {
      console.log("Hello World");
      
  };
  sayHello();
  console.log(sayHello());
  
  function areEqual(a, b)
  {
      return a == b;
  }
  console.log(areEqual(4 , 4));
  
  var res = areEqual(3 , 4);
  console.log(res); */

  //Ejercicio funciones.
/*  function superEqual (a , b) { 
     return a === b
 };
console.log("Son exactamente iguales 5 + '5'? " + superEqual(5,"5"));
console.log("Son exactamente iguales 5 + 5? " + superEqual(5 , 5));

function superEqual2 (a , b) { 
    return a == b
};
console.log("Son  iguales 5 + '5'? " + superEqual2(5 , "5"));
console.log("Son  iguales 5 + 5? " + superEqual2(5 , 5));  */
/* EJERCICIO
Declara una función que recibe un objeto como vuestro animal.
La funcion escribe en la consola cual tipo de animal es, cuanto pesa y si está vivo. No retorna ningún valor.
Ejemplo de consola:
Tha cat weighs 5 kg and it´s alive */

/* var myAnimal1 = {
    alive : true,
    type : "Cat",
    weight : 5,
    }
var myAnimal2 = {
    alive : false,
    type : "Dog",
    weight : 15,

    }
var myAnimal3 = {
    alive : false,
    type : "Rat",
    weight : 1,
    }

    function myAnimal(parametro) {
        console.log("My " + parametro.type + " weight's is " + parametro.weight + " and, it´s alive? " + parametro.alive);        
    }
myAnimal(myAnimal3);

function dameDatos(dato) {
    console.log(" A " + dato.type + " have " + dato.weight + " kg. And alive = " + dato.alive );    
}
dameDatos(myAnimal2);
dameDatos(myAnimal1);
dameDatos(myAnimal3);
 */

// Crea tres objeto persona con 3 campos nombre, apellido y edad.
// Crea función que muestre los 3 campos en consola.
/* 
var persona1 = {
    nombre : "Juanma",
    apellido : "Rojas",
    edad : 35,
    }
var persona2 = {
    nombre : "Diego",
    apellido : "Andrades",
    edad : 41,
    }
var persona3 = {
    nombre : "Juan Antonio",
    apellido : "Jimenez",
    edad : 37,
    }

function datos(parametros) {
        console.log("Me llamo " + parametros.nombre + " " + parametros.apellido + " " + " y tengo " + parametros.edad + " años. ");
        return parametros.edad;
   }
datos (persona1);
datos (persona2);
datos (persona3);
 */
/* 
 var oName = new String("Jonas");
 console.log("Mya name has" + oName.length + " characters");

 var oAge = new Number(50);

 console.log("My age is " + oAge);

 console.log(oAge.toExponential(0)); */
 

 // Que letra tiene el codigo/numero 65?

/*  var strLetra = String.fromCharCode(65);   //static function
 console.log(strLetra); // Esto muestra a que letra pertenece el número en binario 65, que es la A.

 var numA = "A".charCodeAt(0);
 console.log(numA);  // Lo mismo que antes pero al contrario. */

 // Ejecución de Condicional con if else if
 //var myAge = 50;
 // if(myAge<50);
 //{
 //     console.log("Joven")    
 //}else{
 //  console.log("Viejo")  
 //}
 //
 //
 
 /* var myAge = 50;
  if(myAge<30);
  if(myAge<50);
 {
      console.log("Joven")    
 }
 else if(myAge<40){
   console.log("Viejo")  
 } */
 
/* var verdad;
 function esVerdad(palabra) {
    if(palabra == "verdad"){
        return true;
        }else{
            return false;
        }
    }
    console.log(esVerdad(verdad));
     */


// function esVerdad(palabra) {
//     if("verdad" == palabra)
//     {
//         return true;
//     } else if("falso" == palabra) {
//         return false;
//     }
//     else
//     {
//         return;
//     }
// }

// console.log(esVerdad("verdad"));


// Crea 3 objetos representando los animales Cat, Dog, Rat.
// cada uno tiene 3 propiedades: type ( en string), weght (peso en kg) y  alive (true/false);


var cat = {type: 'Cat', weight: 3, alive: true}
var dog = {type: 'Dog', weight: 17, alive: true}
var rat = {type: 'Rat', weight: 0.3, alive: false}

// console.log(cat.alive);
// console.log(rat.alive);
// console.log(dog.weight);

function muestraAnim(animal) {
    console.log(animal.type + ' weights ' + animal.weight + ' kg and ' + ' alive? ' + animal.alive);
}

muestraAnim(cat);