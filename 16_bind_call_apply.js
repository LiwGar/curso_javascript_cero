const owner = 'Wil';
const address = '123 Avenue';

function dogGreeting(owner, address) {
    console.log(`Hi, I'm ${this.dogName}, and I live with ${owner} on ${address}`);
};

const newHouse = {
    dogName: 'Rocco',
}


// Call
dogGreeting.call(newHouse, owner, address);

// Apply 
const necesaryValues = [owner, address];
dogGreeting.apply(newHouse, necesaryValues);

// Bind
const bindingWithBind = dogGreeting.bind(newHouse, owner, address);
bindingWithBind();



const caricatura = {
    nombre: 'Vaca y Pollito',
}

function recuerdo(personaje) {
    console.log( `${this.nombre} era una caricatura, eran las aventuras de ${personaje}.`);
}

recuerdo.call(caricatura, 'Vaca');
recuerdo.bind(caricatura, 'Pollito');
