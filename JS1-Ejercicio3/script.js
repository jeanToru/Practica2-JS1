//
// Programa de ejemplo - Hola mundo!
//

console.log('Hola mundo!');

let resultado1;
let resultado2;

let a = prompt("Digite el valor de a: ");

let b = prompt("Digite el valor de b: ");

let c = prompt("Digite el valor de c: ");

if (Math.sqrt(b * b - 4 * a * c) > 0) {
    resultado1 = (-b + Math.sqrt(b * b - 4 * a * c) / 2 * a);
    resultado2 = (-b - Math.sqrt(b * b - 4 * a * c) / 2 * a);
}else{
    alert("La ecuación no tiene solución");
}

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);