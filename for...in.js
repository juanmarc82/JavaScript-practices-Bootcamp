// for... in
// nos muestra las posiciones del objeto
const myObjIn = [1, 2, 3, "Hello"];
myObjIn.Prop1 = "Propiedades1";
for (let p in myObjIn)
{
    console.log(p);
    
}

//for...of (ES6)
// nos muestra el contenido de las posiciones del objeto
const myObjOf = [1, 2, 3, "Hello"];
myObjOf.Prop1 = "Propiedades1";
for (let p of myObjOf)
{
    console.log(p);
    
}
