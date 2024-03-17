console.log(saludar("Alberto", "Mainardi"));

//Funcion declarada
function saludar(nombre, apellido) {
    return nombre + " " + apellido;
}


// Funcion expresada
// console.log(despedirse("Alberto", "Mainardi"));     // No se la puede llamar antes de inicializarse
let despedirse = function (nombre, apellido){
    return "Adiós, " + nombre + " " + apellido;
}
console.log(despedirse("Alberto", "Mainardi")); 