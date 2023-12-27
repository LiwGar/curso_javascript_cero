// Null
let snoopy = null;
console.log(snoopy);
console.log(typeof snoopy);

// Undefined
let name;
console.log(name);

// Symbol
let uniqueId = Symbol('id');
let symbol1 = Symbol(1);
let symbol2 = Symbol(1);
console.log(symbol1 === symbol2);


let ID = Symbol('id');

let user = {};

user[ID]='1234';

console.log(user);

// Bigint
let bigNumber = 109823746783982764567847654782374n;

console.log(bigNumber);

let numberOfParticlesInTheUniverse = 10000000000000000000n;

console.log(numberOfParticlesInTheUniverse);