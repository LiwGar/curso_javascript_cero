//for(inicializacion, condicion, incremento); {
    // sentencia, codigo
//}

const dias = ['Lunes', 'Martes', 'Mercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

function recorrerDias() {
    for ( let i = 0; i < dias.length; i++) {
        console.log(dias[i]);
    }
}

recorrerDias();


///////////// forEach  ///////////

/**
 * array.forEach((item) => {
 *  codigo a ejecutar
 * })
 */


dias.forEach((item) => {
    console.log(`Hoy es ${item}, Feliz dia!`);
});




