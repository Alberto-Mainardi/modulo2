    
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

