// Enlace implicto - Implicit binding

const house = {
    dogName: 'Rocco',
    dogGreeting: function() {
        console.log(`Hi, I'm ${this.dogName}`);
    },
}

house.dogGreeting();



// Enlace Explicito - Explicit binding
function dogGreeting2() {
    console.log(`Hi, I'm ${this.dogName}`);
}

const newHouse = {
    dogName: 'Rocco',
    dogAge: 8
}

dogGreeting2.call(newHouse);



function newDogGreeting(owner, address){
    console.log(`Hi I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

const owner = 'Wil';
const address = 'Avenue 123';

newDogGreeting.call(newHouse, owner, address);

