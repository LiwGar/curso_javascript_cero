// User information
const userName = 'Bart';
const fullName = 'Bartolomeo Simpson';
const age = 10;
const isStudent = true;

// Address
const address = {
    street: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'Nevada',
    zipCode: 1020
}

// Hobbies
const hobbies = ['Skating', 'Collect Radioactive Man Comics', "Krusty's Show", 'Gamming', 'Slingshot'];

// Generate personalized bio
const personalizedBio = `Hi!, I'm ${userName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}.
Follow me for coding adventures!`

// Print the user profile and bio
console.log(personalizedBio);
