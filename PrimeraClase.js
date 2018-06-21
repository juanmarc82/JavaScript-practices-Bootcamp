// palabra clave "class"


class FirstClass {

}
let fc1 = new FirstClass();
let fc2 = new FirstClass();
console.log(fc1 instanceof FirstClass); // instanceof -> ¿es esto una instancia de aquel?
console.log(typeof fc1); // 'object'
console.log(fc1 instanceof Date);
console.log(fc1 == fc2);


classFechaSimple{
    constructor(dia, mes año){
        this._dia = dia;
        
    }
}
