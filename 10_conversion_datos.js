// Explicit Type Casting

let string = '345';
let integer = parseInt(string);

console.log(integer);
console.log(typeof integer);

let stringDecimal = '3.45';
let decimal = parseFloat(stringDecimal);

console.log(decimal);
console.log(typeof decimal);

let binario = '110101';
let integerDecimal = parseInt(binario, 2);

console.log(integerDecimal);
console.log(typeof integerDecimal);

// Implicit Type Casting

let sum = '23' + 3;
console.log(sum);

let sumWithBoolean = '3' + true;
console.log(sumWithBoolean);

let sumWithNumber = 3 + true;
console.log(sumWithNumber);

let stringValue = '10';
let numberValue = 10;
let booleanValue = true

console.log(stringValue + stringValue);
console.log(stringValue + numberValue);
console.log(stringValue + booleanValue);
console.log(numberValue + stringValue);
console.log(numberValue + numberValue);
console.log(numberValue + booleanValue);
console.log(booleanValue + stringValue);
console.log(booleanValue + numberValue);
console.log(booleanValue + booleanValue);



