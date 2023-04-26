"use strict";
/* var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
console.log(batman); */

// crear una interfaz para validar este objeto

interface Heroe{
    nombre: string;
    artesMarciales:string[];
}

export const batman:Heroe = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate', 'Aikodo', 'Wing Chun', 'Jiu-Jitsu']
}

console.log(batman);