    
/*
    // Calculadora IMC
let altura = Number(prompt("Por favor, ingrese su altura en metros."));
let peso = Number(prompt("ahora por favor ingrese su peso en kilogramos."));
let imc = peso / (altura * altura);
document.write("Su IMC es " + imc.toFixed(2));


    // Cálculo de área de figuras
let PI = 3.14;
let area;

const figuras = [
    { nombre: "figura 1", figura: "cuadrado", base: 25 },
    { nombre: "figura 2", figura: "rectángulo", base: 25, altura: 15 },
    { nombre: "figura 3", figura: "cuadrado", base: 12 },
    { nombre: "figura 4", figura: "triangulo", base: 25, altura: 15 },
    { nombre: "figura 5", figura: "triangulo", base: 12, altura: 13 },
    { nombre: "figura 6", figura: "circulo", radio: 21 },
    { nombre: "figura 7", figura: "trapecio", baseMayor: 25, baseMenor: 12, altura: 10},
    { nombre: "figura 8", figura: "trapecio", baseMayor: 15, baseMenor: 22, altura: 4},
    { nombre: "figura 9", figura: "circulo", radio: 13 },
    { nombre: "figura 10", figura: "cuadrado", base: 13 }
];

function calcularArea(figuras) {
    for (let i = 0; i < figuras.length; i++) {
        if (figuras[i].figura == "cuadrado") {
            area = figuras[i].base ** 2;
            console.log("la " + figuras[i].nombre + " es un " + figuras[i].figura + " y su área es de " + area);
        } else if (figuras[i].figura == "rectángulo"){
            area = figuras[i].base * figuras[i].altura;
            console.log("la " + figuras[i].nombre + " es un " + figuras[i].figura + " y su área es de " + area);
        } else if (figuras[i].figura == "triangulo"){
            area = (figuras[i].base * figuras[i].altura) / 2;
            console.log("la " + figuras[i].nombre + " es un " + figuras[i].figura + " y su área es de " + area);
        } else if (figuras[i].figura == "circulo"){
            area = PI * figuras[i].radio ** 2;
            console.log("la " + figuras[i].nombre + " es un " + figuras[i].figura + " y su área es de " + area);
        } else if (figuras[i].figura == "trapecio"){
            area = ((figuras[i].baseMayor + figuras[i].baseMenor) * figuras[i].altura) / 2;
            console.log("la " + figuras[i].nombre + " es un " + figuras[i].figura + " y su área es de " + area);
        } 
    }
}
calcularArea(figuras);
*/


    // Declaramos la función declarada
function calculadora(ope, num, num2) {
    // console.log(typeof ope, typeof num, typeof num2);
    // switch (ope) {
    //     case "+":
    //         return num + num2;
    //     case "-":
    //         return num - num2;
    //     case "*":
    //          return num * num2;
    //     case "/":
    //         return num / num2;
    //     default:
    //         return "No es una operación válida";
    // }

    if(ope == '+'){
        return num + num2;
    } else if(ope == '-'){
        return num - num2;
    } else if(ope == '*'){
        return num * num2;
    } else if(ope == '/'){
        return num - num2;
    } else {
        return "No es una operación válida";
    }
}
    // Invocar o llamar a la función
// let resultado = calculadora("+", 14, 25);
// console.log(resultado);

// console.log(calculadora('-', 3, 15));
// console.log(calculadora('+', 33, 5));
// console.log(calculadora('*', 2, 21));
// console.log(calculadora('/', 30, 2));

// Metodos de los arrays
let numeros = [14, 25, 36, 89, 41, 2, 3, 54, 76, 233];

function buscarEnArray(arr, valor) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == valor) {
    //         return true;
    //     }
        
    // }
    // return false;
    return arr.includes(valor);
}
console.log(buscarEnArray(numeros, 14));

let nombres = ["Luis", "Ángel", "Cecilia", "Gonzalo", "Alberto"];

console.log(buscarEnArray(nombres, "Alberto"));

let alumno = {
    nombre: "Juan",
    edad: 21,
    apellido: "López",
    direccion: "Av. Aconquija 2300"
}

function contarPropiedades(obj) {
    return Object.keys(obj).length;    
}

console.log(contarPropiedades(alumno));

function concatenarArrays(arr, arr2) {
    return arr.concat(arr2);
    // return arr.push(arr2);
}
console.log(concatenarArrays(numeros, nombres));


// Obtener la posición de algún valor

console.log(nombres.indexOf("Cecilia"));


// Eliminar un registro de un array
console.log(nombres);

function eliminarRegistroArray(arr, valor) {
    // Está?
    let esta = arr.includes(valor);
    if (esta) {
        let pos = arr.indexOf(valor);
        arr.splice(pos, 1);
        return arr;
    }
}

console.log(eliminarRegistroArray(nombres, "Luis"));
console.log(nombres.sort());
console.log(nombres.reverse());

const cafeteria = [
    { nombre: "Café americano", categoria: "Bebida", cantidad: 20 },
    { nombre: "Croissant", categoria: "Alimento", cantidad: 15 },
    { nombre: "Tarta de manzana", categoria: "Postre", cantidad: 8 },
    { nombre: "Té verde", categoria: "Bebida", cantidad: 25 },
    { nombre: "Sandwich de pollo", categoria: "Alimento", cantidad: 10 },
    { nombre: "Brownie", categoria: "Postre", cantidad: 12 }
];

function esBrownie(postre) {
    return postre.nombre === "Brownie";
}

console.log(cafeteria.find(esBrownie));

let string = "Soy,un,string";
console.log("La longitud del texto es de " + string.length + " caracteres.");
console.log(string.indexOf("n"));
console.log(string.search("string"));
console.log(string.split(","));
console.log(string.toUpperCase().split(","));
console.log(string.toLocaleLowerCase().split(","));