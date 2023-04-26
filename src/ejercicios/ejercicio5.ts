"use strict";
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
/* var Rectangulo = /** @class */ /* (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
var clase = new Rectangulo(2, 3);
console.log(clase.calcularArea()); */


export class Rectangulo {
    constructor(
        public base: number,
        public altura: number 
    ) {}

    calcularArea():number{
        return this.base * this.altura
    }
}


export let result = new Rectangulo(4,7)

console.log(result.calcularArea);