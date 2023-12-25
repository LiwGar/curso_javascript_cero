//Tipo de datos Primitivos, Inmutables.
let numero = 23;
console.log(numero);

numero  = numero + 15;
console.log(numero);

let esVerdadero = true;
console.log(esVerdadero);

esVerdadero = false;
console.log(false);

//Tipo de datos Complejos, Mutables

let usuario = {
    nombre: 'Wil',
    edad: 30
}
console.log(usuario);

usuario.edad = 38;
console.log(usuario);

let canastaDeFrutas = ['Manzanas', 'Uvas', 'Bananos', 'Mandarinas'];
console.log(canastaDeFrutas);

canastaDeFrutas[0] = 'Sandia';
canastaDeFrutas[1] = 'Piña';

console.log(canastaDeFrutas);



function cambiarNombre(objeto) {
    objeto.nombre = 'Wil';
}

let persona = {nombre: 'Desconocido', edad: 38};

cambiarNombre(persona);

console.log(persona);

