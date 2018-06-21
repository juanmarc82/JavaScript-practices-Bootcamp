class Criatura {
    constructor(tipo)
    {
        this._tipo= tipo;
    }
    get tipo(){
        return this._tipo;
    }
}
class Mamifero extends Criatura {  // con extends habilitamos herencia
    constructor ()
    {
        super("Mamifero");  // super llama al constructor de su 'progenitora'
        console.log(this.tipo); // Hereda de su super-clase
    }
}
let mamifero = new Mamifero();
console.log(mamifero.tipo);
