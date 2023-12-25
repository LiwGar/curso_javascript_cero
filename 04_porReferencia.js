//Tipos de Datos complejos - Paso por Referencia

let frutas = {
    naranja: 'Naranja',
};

let vegetales = frutas;

vegetales.naranja = 'Brocoli'

console.log(vegetales);

let ropa = {
    blusa: 'Blusa',
};

console.log(ropa);

ropa.pantalon = 'Pantalon';

console.log(ropa);