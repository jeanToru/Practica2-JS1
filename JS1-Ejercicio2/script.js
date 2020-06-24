//
// Programa de ejemplo - Hola mundo!
//

console.log('Hola mundo!');

let numero = parseInt(prompt('Digite el numero'));

if (parseInt(numero) > 0) {

    if (numero % 5 == 0 && numero % 3 == 0) {
        console.log('🍺', numero);
    } else if (numero % 5 == 0 && numero % 3 != 0) {
        console.log('🍔', numero);
    }
    else if (numero % 5 != 0 && numero % 3 == 0) {
        console.log('🚀', numero);
    } else {
        console.log('No es divisible por 3 y 5');
    }
}
else {
    console.log("Error");
}