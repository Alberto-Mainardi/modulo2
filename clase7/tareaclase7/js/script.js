    // 1
/*
const numeros = [3, 7, 10, 5];
let numerosDoble = []
for (let i = 0; i < numeros.length; i++) {
    numerosDoble.push(numeros[i] * 2);
}
console.log(numeros);
console.log(numerosDoble);
*/

    // 2
/*
const numeros = [2, 8, 15, 11, 6];
let numerosPares = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] %2 == 0) {
        numerosPares.push(numeros[i]);
    }
}
console.log(numeros);
console.log(numerosPares);
*/

    // 3
/*
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const arrayConcat = array1.concat(array2)
console.log(array1);
console.log(array2);
console.log(arrayConcat);
*/

    // 4
/*
const nombres = ["Ana", "Carlos", "Eva", "Juan", "Luisa"];
const longitudMinima = 4;
let nombresLargos = [];
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length > longitudMinima) {
        nombresLargos.push(nombres[i]);
    }
}
console.log(nombres);
console.log(nombresLargos);
*/

    // 5
/*
const palabras = ["sol", "playa", "montaña", "océano", "desierto"];
let palabraMayor = "";
for (let i = 0; i < palabras.length; i++) {
    if (palabraMayor.length < palabras[i].length) {
        palabraMayor = palabras[i];
    }
}
console.log(palabraMayor);
*/

    // 6
/*
const frase = "JavaScript es divertido";
let fraseSplit = frase.split(" ")
fraseSplit.reverse();
fraseSplit = fraseSplit.join(" ");

console.log(frase);
console.log(fraseSplit);
*/

    // 7
/*
const frase = "La programación en JavaScript es emocionante";
const palabra = "JavaScript";
let signosReemplazo = "";
for (let i = 0; i < palabra.length; i++) {
    signosReemplazo = signosReemplazo + "*"; 
}
let fraseCensurada = frase.replace(palabra, signosReemplazo);
console.log(fraseCensurada);
*/

    // 8
//Sin utilizar método charAt()
/*
const palabra = "manzana";
let palabraMayus = palabra.split("")
palabraMayus[0] = palabraMayus[0].toUpperCase();
palabraMayus = palabraMayus.join("");
console.log(palabraMayus);
*/

// Utilizando charAt ()
/*
const palabra = "manzana";
let primeraLetra = palabra.charAt(0);
let palabraMayus = palabra.replace(palabra.charAt(0), primeraLetra.toUpperCase());
console.log(palabraMayus);
*/

    // 9
/*
const palabra = "programación";
cantVocales = palabra.match(/[aeiou]/g).length;
console.log(cantVocales);
*/

    // 10
/*
const palabras = ["gato", "elefante", "tigre", "leon"];
let palabraMayor = "";
for (let i = 0; i < palabras.length; i++) {
    if (palabraMayor.length < palabras[i].length) {
        palabraMayor = palabras[i];
    }
}
console.log(palabraMayor);
*/