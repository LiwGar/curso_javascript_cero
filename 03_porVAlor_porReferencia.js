//Paso por Valor

let x = 10;
let y = 'Hello';
let z = null;

let a = x;
let b = y;
let c = z;

console.log(x, y, z, a, b, z);

a = 20;
b = 'Wolrd';
c = undefined; 

console.log(x, y, z, a, b, c);

//Paso por Referencia

let frutas = ['manzana'];
frutas.push('pera');
console.log(frutas);

let panaderia = ['pan'];
let copiaDePanaderia = panaderia;

console.log(panaderia, copiaDePanaderia);

panaderia.push('deditos');

console.log(panaderia, copiaDePanaderia);
