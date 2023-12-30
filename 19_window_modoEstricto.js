function favoriteCharacter() {
    console.log(`I'm ${this.name}`)
};

const character = {
    name: 'Chespirito',
    age: 50
}

favoriteCharacter.call(character);