"use strict";
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
export const getAvenger = function (nombre:string, poder?:string, arma:string = "arco") {
    let mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        mensaje = `${ nombre } tiene el poder de: ${poder} y un arma: ${arma}`
    }
    else {
        mensaje = nombre + " tiene un " + arma;
        mensaje = `${nombre} tiene un: ${arma};`
    }
    return mensaje;
};
console.log(getAvenger("Mujer maravilla", "fuerza", "espada"));