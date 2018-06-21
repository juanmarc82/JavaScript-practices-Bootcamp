"use strict";



class Fecha
{
    constructor (dia, mes, ano)
    {
        if(typeof dia != 'number' ||
           typeof mes != 'number' ||
           typeof ano != 'number' )
           {
               throw new Error ("dia, mes o ano no es un numero!");
           }
           if(dia <= 0 || 
              dia >= 32 )
           {
               throw new Error ("dia o mes incorrecto!");
           }
           if (mes < 1 ||
            mes > 12  ) 
            {
                throw new Error ("mes incorrecto!");
           }
           if(ano <= 1920 ||
              ano >= 3000 )
            {
                throw new Error ("año incorrecto");
            }   
    }
}


try {
    let f3 = new Fecha(31, 4, 1990);
    console.log("Esto no ejecuta una excepcion");
} 
catch (error) 
{
    console.log("EXCEPTION:" + error);    
}
finally
{
    console.log("Excepcion o no, siempre ejecuta lo que metamos en finally");
}


