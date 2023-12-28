/**
 * Capacidades que tienen las funciones
al igual que otros objetos
 */


// Pasar Funciones como Argumentos 

function functionA() {};

function functionB(functionA){};

functionB(functionA);

// Retornar funciones

function functionC(){
    function functionD() {};
    return functionD;
};

//Asignar funciones a variables -> Expresion de funciones

const functionAVariable = function(){};


// Tener propiedades y metodos

function functionE() {};

const objeto = {};

functionE.call(objeto);


// Anidar funciones -> Nested functions

function functionF(){
    function functionG() {
        function functionH() {

        };
        functionH();
    };
    functionG();
};
functionF();


// Es posible almacenar funciones en objetos?

const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage(){
        console.log('Fuego!')
    }
}

rocket.launchMessage();
console.log(rocket.name);
console.log(typeof rocket);
