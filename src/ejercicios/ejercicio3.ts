/* "use strict";
// Convertir esta funcion a una funcion de flecha
//function resultadoDoble( a, b ){
//return (a + b) * 2
//}
var resultadoDoble = function (a, b) { return (a + b) * 2; };
console.log(resultadoDoble(2, 2)); */

export const funcionFlecha = (a:number, b:number) => (a + b) * 2;

console.log(funcionFlecha);