let direccion = 'Calle Falsa 123';
let ciudad = 'Springifield';


let direccionCompleta = 'Mi direccion completa es, ' +  direccion + ', ' + ciudad;
console.log(direccionCompleta); 

// Concatenacion: Template Literals

let nombre = 'Wil';
let pais = 'Colombia';

let presentacion = `Hola, soy ${nombre} de ${pais}`;
console.log(presentacion);

// Concatenacion: join()

let primeraParte = 'Me encantan';
let segundaParte = 'las mujeres de';
let terceraParte = 'Finlandia';

let pensamiento = [primeraParte, segundaParte, terceraParte];
console.log(pensamiento.join(' '));

// Concatenacion: concat();

let hobbie1 = 'hobbie1';
let hobbie2 = 'hobbie2';
let hobbie3 = 'hobbie3';

let hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3);
console.log(hobbies);

// Caracteres de escape

let escapeAlternativo = "I'm Software Engineer";

let escapeBarraInvertida = 'I\'m Software Engineer';

let escapeComillaIvertida = `I'm Software Engineer`;

// Escritura de Strings largos

/*  
    Las rosas son rojas,
    Las violetas son azules,
    Caracter inesperado, 
    En la linea 86.
*/

let poema = 'Las rosas son rojas,\n' +
            'Las violetas son azules,\n' +
            'Caracter inesperado,\n' +
            'En la linea 86. '

console.log(poema);

let poemaDos = 'Las rosas son rojas,\n\Las violetas son azules,\n\Caracter inesperado,\n\
En la linea 86.'

console.log(poemaDos);

let poemaTres = `Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la linea 86.`

console.log(poemaTres);




