// const palabrasOcultas = ['javascript', 'html', 'css', 'react'];

// function adivinaPalabra(palabraNueva) {
//     if(palabrasOcultas.includes(palabraNueva)){
//         console.log(`Felicitaciones! adivinaste!`)
//     } else {
//         console.log(`Lo siento, intenta de nuevo.`);
//     }
// }

// const palabraIngresada = prompt('Adivina la palabra secreta');

// adivinaPalabra(palabraIngresada);


let palabraOculta = 'javascript';
let intentos = 3;

function verificarSupocision(suposicion, palabraOculta) {
    if(suposicion.toLowerCase() === palabraOculta) {
        return true;
    }
    return false;
};


function jugarAdivinaLaPalabra() {
    
    alert('Bienvenido al juego de Adivina la Palabra.');
    alert('Tienes 3 intentos.');
    alert('-pista- La palabra oculta es un lenguaje de programacion');
    
    while (intentos > 0) {
        let suposicion = prompt("Adivina la palabra: ");
    
        if(verificarSupocision(suposicion, palabraOculta)) {
            alert("Correcto! Has adivinado la palabra.");
            break;
        } else {
            intentos--;
            if(intentos > 0) {
                alert(`Incorrecto!, Aun tienes ${intentos} intentos restantes`)
            } else {
                alert(`Ya no te quedan intentos, la palabra oculta era ${palabraOculta}`);
            }
        }
    }
}

jugarAdivinaLaPalabra();