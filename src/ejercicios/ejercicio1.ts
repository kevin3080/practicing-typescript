"use strict";
// Uso de Let y Const
/* var nombre = "Nestor Kauil";
var edad = 25;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log(PERSONAJE); */

let nombre: string = 'Nestor Kauil';
let edad: number = 25;
export const PERSONAJE:{ nombre:string, edad:number } = {

    nombre: nombre,
    edad: edad
}