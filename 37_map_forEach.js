// Methods that iterate over an array. 

// Methods that DO NOT modify the original array (Immutability)

// map()
const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

const squaredNumbers = numbers.map(num => num * num );

console.log(numbers);

console.log(squaredNumbers);


// forEach()

const colors = ['blue', 'white', 'black', 'orange'];

const iteratedColors = colors.forEach( colors => console.log(colors));

console.log(colors);

console.log(iteratedColors);

// Exercise: Fahrenheit to Celsius conversion 

const temperaturesInFahrenheit = [32, 68, 95, 104, 212];

const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9 * (fahrenheit - 32)));

console.log('Temperatures In Fahrenheit: ', temperaturesInFahrenheit);
console.log('Temperatures In Celsius: ', temperaturesInCelsius);

// Exercise: Sum of Elements in an Array

const sumOfArray = [2, 3, 4, 5, 6, 7, 8, 9]

let sum = 0;

sumOfArray.forEach(number => {
    sum += number;
});

console.log('Array of numbers: ', sumOfArray);
console.log('Sum of numbers: ', sum);

