function Vehiculos(brand, model, year, color) {
    this.brand = brand,
    this.model = model,
    this.year = year,
    this.color= color
}


const miVehiculo = new Vehiculos('Renault', 'Duster', 2024, 'Azul Oscuro');
const miVehiculo2 = new Vehiculos('Nissan', 'Kicks', 2024, 'Azul Oscuro');

console.log(miVehiculo, miVehiculo2);

// Ejemplo 2
const personalizedMessage = () => 'See youu Booom!';

function Rocket(name, ownMessage) {
    this.name = name,
    this.launchMessage = ownMessage
}

const rocketFalcon9 = new Rocket('Falcon 9', personalizedMessage);

console.log(rocketFalcon9.name);
console.log(rocketFalcon9.launchMessage())



// Funcion constructura a traves de Arrow Function

const RocketWithArrowFunction = (name, ownMessageForArrowFunction) => ({
    name: name,
    launchMessage: ownMessageForArrowFunction

});

const ownMessageForArrowFunction = 'Bye!!!'

const rocketFalcon9Dos = RocketWithArrowFunction('Falcon 9', ownMessageForArrowFunction);

console.log(rocketFalcon9Dos.name);
console.log(rocketFalcon9Dos.launchMessage);


// Ejemplo 3

const stateMessage = () => 'Agregado';

function ObjetoDeCocina(name, color, stateMessage) {
    this.name = name,
    this.color = color
    this.succefullyAdded = stateMessage;
}


const objeto1 = new ObjetoDeCocina('Vajilla', 'Blanca', stateMessage);

console.log(objeto1.name);
console.log(objeto1.color);
console.log(objeto1.succefullyAdded());


// Ejemplo 4

const AddAlimento = (name, tipo, stateMessage) => ({
    name: name,
    tipo: tipo, 
    succefullyAdded: stateMessage
});

const Alimento1 = AddAlimento('Piña', 'Fruta', stateMessage);

console.log(Alimento1.name);
console.log(Alimento1.tipo);
console.log(Alimento1.succefullyAdded());




// Ejemplo 5

function AddStudent(name, lastName, years) {
    this.name = name,
    this.lastName = lastName,
    this.years = years
}

const student1 = new AddStudent('Sergio', 'Ramos', 36);
const student2 = new AddStudent('Cristiano', 'Ronaldo', 38);

console.log(student1);
console.log(student2);

// Ejemplo 6

const AddStudentWithArrowFunction = (name, lastName, years) => ({
    name: name,
    lastName: lastName,
    years: years
});

const student3 = AddStudentWithArrowFunction('Luis', 'Diaz', 26);
const student4 = AddStudentWithArrowFunction('Luis', 'Sinesterra', 24);

console.log(student3);
console.log(student4);

// Ejemplo 7

function Book(name, author, category) {
    this.name = name;
    this.category = category;
    this.author = author;
    this.messageForLibrary = function() {
    console.log(`Muchas Gracias por su donacion del libro: 
${this.name} escrito por ${this.author} para nuestra seccion de ${this.category}.`);
    }
};

const Libro1 = new Book('El Coronel no tiene quien le Escriba,', 'Gabriel Garcia Marquez', 'Literatura');

Libro1.messageForLibrary();



// Ejemplo 8

const Book2 = (name,  author, category) => ({
    name: name,
    category: category,
    author: author,
    libraryMessage: () => {
        console.log(`Muchas Gracias por su donacion del libro: 
${name} escrito por ${author} para nuestra seccion de ${category}.`);
    }
});


const Libro2 = Book2('Cien Años de Soledad,', 'Gabriel Garcia Marquez', 'Literatura');

Libro2.libraryMessage();

