

// Existen 2 tipos de funciones: declaradas y expresadas.

// declaración de la función
// Función expresada: palabra-reservada-function nombre(parámetros){Instrucciones}
function suma(num, num2){
    let resultado = num + num2;
    return "El resultado de la suma entre " + num + " y " + num2 + " es igual a " + resultado;
}

// Invocar o llamar a la función.
// alert("Hola");
// console.log("hola");

function resta(num, num2){
    let resultado = num - num2;
    return "El resultado de la resta entre " + num + " y " + num2 + " es igual a " + resultado;
}
function mult(num, num2){
    let resultado = num * num2;
    return "El resultado de la multiplicación entre " + num + " y " + num2 + " es igual a " + resultado;
}
function div(num, num2){
    let resultado = num / num2;
    return "El resultado de la división entre " + num + " y " + num2 + " es igual a " + resultado;
}
document.write("<p>" + suma(4, 27) + "</p>");
document.write(resta(4, 27));
document.write("<p>" + mult(4, 27) + "</p>");
document.write("<p>" + div(4, 27) + "</p>");


let mouse = {
    color: "verde",
    cable: true,
    moverCursor: function () {
        alert("Se movió el mouse");
    }
}
mouse.moverCursor();