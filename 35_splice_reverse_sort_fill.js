// Metodos que modifican el array original (Mutabilidad). Eggplant Mushroom


// slice(position, # to remove, # to add)
const vegetables = ['carrot', 'broccoli', 'spinach', 'tomato', 'potato', 'corn', 'onion', 'carrot', 'pumpkin'];

const removedVegetables = vegetables.splice( 2, 1, 'cucumber', 'eggplant');

console.log(vegetables);
console.log(removedVegetables);


// reverse()
console.log(vegetables.reverse());

// sort()
const numbers = [4, 18, 1, 62, 34];
console.log(numbers);

const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

const unsortedNumbers = sortedNumbers.sort((a, b) => a -b);
console.log(unsortedNumbers);


// sort() with strings 
const cities = ['New York', 'Paris', 'Tokio', 'Londres'];
console.log(cities);

const sortedCities = cities.sort();
console.log(sortedCities);

// fill()  fill(item, desde, hasta)
const ages = [21, 35, 35, 45, 50];
console.log(ages.fill(0, 2, 4));

console.log(ages.fill(15, 1));
console.log(ages.fill(15));


