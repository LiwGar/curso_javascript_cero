const name = 'Wil';

const greeting = function(name) {
    return (`Hi, ${name}`);
};

console.log(greeting(name));


// Arrow function - Explicit return

const newGreeting = (name) => {
    return (`Hi, ${name}`);
};

console.log(newGreeting(name));

// Arrow function - Implicit return

const newGreetingImplicit = name => `Hi, ${name}`;

const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`;


// Lexical Binding

const functionalCharacters = {
    name: 'Cerebro',
    messageWithTraditionalFunction : function(message) {
        console.log(`${this.name} says: ${message}`);
    },
    messageWithArrowFunction : (message) => {
        console.log(`${this.name} ${message}`);
    }, 
}

functionalCharacters.messageWithTraditionalFunction('The same thing we do every night, Pinky...');
functionalCharacters.messageWithArrowFunction('Try to take over the world!');