// alert("estamos conectados al index");

// Condicional doble
// let numero = 15;
// if(numero < 18){
//     // Ejecuta si es verdadero
//     alert("El número " + numero + " es menor a 18")
// }else{
//     // Se ejecuta cuando la condición es falsa
//     alert("El número " + numero + " es mayor a 18")
// }

// Condicional anidado
// let rol = "alumno";

// if (rol == "alumno") {
//     alert("Bienvenido alumno");
// } else if (rol == "docente"){
//     alert("Bienvenido docente");
// } else {
//     alert("ese rol no existe");
// }

// let num = 6;

// if (num >= 5) {
//     if (num <= 10) {
//         alert("Está dentro del rango");
//     } else {
//         alert("Está fuera del rango");
//     }
// } else {
//     alert("Está fuera del rango")
// }

// if (5 <= num && num <= 10) {
//     alert("Está dentro del rango");
// } else {
//     alert("Está fuera del rango");
// }

// operadores asignación:  =   operadores aritméticos: + - / * %   operadores unitarios: 
// console.log(num);
// num ++;
// console.log(num);
// num --
// console.log(num);
// let llueve = true;
// console.log(llueve);
// console.log(!llueve);
// operadores condicionales: == === != !== > < >= <=

// console.log('12' !== 12);

// operadores lógicos: && ||

// let finde = false;
// let esFeriado = false;

// "or" cuando se cumple una de las dos condiciones
// if (finde || esFeriado) {
//     console.log("no es dia laboral");
// } else {
//     console.log("es un dia laboral");
// }

// y && se deben cumplir todas las condiciones.
// if (!finde && !esFeriado) {
//     console.log("es un día laboral");
// } else {
//   console.log("no es un día laboral");  
// }

// let dia = prompt("Ingresa el día");
// switch (dia) {
//     case "Lunes":
//         console.log("Me levanto con una re pereza");
//         break;
//     case "Viernes":
//         console.log("Me levanto con muchas ganas porque se viene el finde");
//         break;

//     default:
//         console.log("Ese día no es válido");
//         break;
// }

// true && true = true
// false && true = false
// true && false = false
// false && false = true

// true || true = true
// true || false = true
// false || true = true
// false || false = false


        // Bucles | estructuras repetitivas

/*
let alumnos = [];
alumnos [0] = "Cecilia";
alumnos [1] = "Alberto";
alumnos [2] = "Fede";
alumnos [3] = "Felipe";
alumnos [50] = "Ángel";

let x = 4;
while (x>=4 && x<50) {
    alumnos [x] = null;
    x++;
}
console.log(alumnos);
*/


//Mostrar la tabla del 5
// let numero = Number(prompt("ingrese un número"));
// let num = 1;

// console.log(num <= 10);

// while (num <= 10) {
//     console.log(numero + ' X ' + num + ' = ' + num * numero);
//     num++;
// }

// let num2 = 10;

// do {
//     console.log(num2);
//     num2++
// } while (num2 < 10);

// let numIngresado = Number(prompt("Ingresa tu número"));

// let numeros = [];
// for (let a = 0; a < 10; a++) {
//     numeros [a] = a * 3;
// }
// console.log(numeros);

// for (let i = 1; i <= 10; i++) {
//     console.log(numIngresado + " X " + i + " = " + numIngresado * i);
// }

let numero = [];
let numIngresado;
while (numIngresado != 0) {
    numIngresado = Number(prompt("Ingresa un número"));
    console.log("La longitud es " + numero.length);
    if (numIngresado != 0) {
        numero[numero.length] = numIngresado;
    }
}
console.log(numero);