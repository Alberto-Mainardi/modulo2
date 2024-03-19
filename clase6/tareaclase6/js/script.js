        // Ejercicios While

    // 1
/*
let array = [];
let num = 0;
while (num < 10){
    num = num + 1;
    array[array.length] = num;
}
console.log(array);
*/

    // 2
/*
let num = 0;
let suma = 0;
while (num < 50) {
    num = num + 1;
    suma = suma + num;
}
console.log(suma);
*/

    // 3
/*
let num = 2;
while (num <= 20 && num >= 2){
    if (num %2 == 0) {
        console.log(num);
    }
    num = num + 1
}
*/



        // Ejercicios Do-While

    // 1
/*
let num = 0;
do{
    num = num + 1;
    console.log(num);
} while (num < 5);
*/

    // 2
/*
let num = 0;
do{
    num = Number(prompt("Ingrese un número mayor a 100"));
} while (num <= 100);
console.log(num);
*/


        // Ejercicios For

    // 1
/*
for (let num = 1; num <= 10; num++){
    console.log(num);
}
*/

    // 2
/*
let resultado = 0;
for (let num = 1; num <= 10; ) {
    if (resultado == 0) {
        resultado = 1;
    } else {
        resultado = resultado * num;
        console.log(resultado);
        num++;
    }
}
*/

    // 3
/*
for (let num = 1; num <= 15; num++) {
    if (num %2 != 0) {
        console.log(num);
    }
}
*/


        // EJERCICIOS COMBINADOS

    // 1
/*
let num = 1
while (num * 3 < 30) {
    console.log(num * 3);
    num++;
}
*/

    // 2
/*
for (let num = 1; num <= 10; num++) {
    console.log(num * 5);
}
*/


        // EJERCICIOS SWITCH
    // 1
/*
let dia = Number(prompt("Ingrese el numero del dia de la semana"));
let esValido;

while (!esValido) {
    switch (dia) {
        case 1:
            console.log("Lunes");
            esValido = true;
            break;
    
        case 2:
            console.log("Martes");
            esValido = true;
            break;
    
        case 3:
            console.log("Miercoles");
            esValido = true;
            break;
    
        case 4:
            console.log("Jueves");
            esValido = true;
            break;
    
        case 5:
            console.log("Viernes");
            esValido = true;
            break;
    
        case 6:
            console.log("Sabado");
            esValido = true;
            break;
    
        case 7:
            console.log("Domingo");
            esValido = true;
            break;
    
        default:
            dia = Number(prompt("El día ingresado no existe. Por favor, ingrese nuevamente el día."))
            break;
    }
}
*/

    // 2
/*
let estrellas = Number(prompt("Ingrese la calificación del producto de 1 a 5 estrellas."));
let esValido;

while (!esValido) {
    switch (estrellas) {
        case 1:
            console.log("El producto no sirve.");
            esValido = true;
            break;

        case 2:
            console.log("El producto es deficiente.");
            esValido = true;
            break;

        case 3:
            console.log("El producto es mediocre.");
            esValido = true;
            break;

        case 4:
            console.log("Es un buen producto.");
            esValido = true;
            break;
        
        case 5:
            console.log("Es un EXCELENTE producto.");
            esValido = true;
            break;

        default:
            estrellas = Number(prompt("La calificación ingresada no va del 1 al 5. Por favor, ingrese una calificación del 1 al 5."))
    }
}
*/

    // 3
/*
let fruta = prompt("Ingrese una de las siguientes frutas: 'Manzana', 'Plátano', 'Uva', 'Fresa', 'Arándano'");
let esValido;

while (!esValido) {
    switch (fruta) {
        case "Manzana":
            console.log("Fruta de temporada");
            esValido = true;
            break;
        case "Plátano":
        case "Uva":
            console.log("Fruta Tropical");
            esValido = true;
            break;
        case "Fresa":
        case "Arándano":
            console.log("Fruta del bosque");
            esValido = true;
            break;
        default:
            fruta = prompt("La fruta que ingresaste no pertenece al listado de frutas. Por favor, ingresa una de las siguientes frutas: 'Manzana', 'Plátano', 'Uva', 'Fresa', 'Arándano'");
            break;
    }
}
*/