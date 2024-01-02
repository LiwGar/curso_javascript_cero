// switch(expresion) {
//     case valor1:
//         //codigo a ejecutar;
//     break;
//     case valor2:
//         //codigo a ejecutar;
//     break;
//     case valor3:
//         //codigo a ejecutar;
//     break;
//     case valor4:
//         //codigo a ejecutar;
//     break;
//     default:
//         //codigo default si no se cumple niguno de los casos anteriores
// }

let expresion = "Piña";

switch(expresion) {
    case "Naranja":
        console.log('El valor de la Naranja es de $5000 por kilo');
        break;
    case "Manzana":
        console.log('El valor de la Manzana es de $6000 por kilo');
        break;
    case "Fresa":
        console.log('El valor de la Fresa es de $8000 por kilo');
        break;
    case "Piña":
        console.log('El valor de la Piña es de $2000 por kilo');
        break;
    default:
        console.log(`Lo siento, pero no hay disponible ${expresion} en el momento`);
}

console.log('Necesita algo mas?');