/*
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
*/

// OBJETOS

// Propiedades
/* distanciaARecorrer, bateria, estacionDeCarga, */

/*

let autoMarte = {
    carga: 100,
    cantRuedas: 10,
    tamMaxMuestra: 20,
    distMax: 22,
    distGanchos: 100,
    consumoCargaXMetro: 2,  
    recoleccionMuestra: function (tam, dist) {
        if (tam < this.tamMaxMuestra) {
            if (dist < this.distGanchos) {
                return "La muestra se está recolectando."
            } else {
                return "La muestra está demasiado lejos."
            }
        } else {
            return "La muestra es demasiado grande."
        }
    },
    calcularDistanciaARecorrer: function (distanciaARecorrer) {
        if (distanciaARecorrer <= this.distMax) {
            let distanciaReal = distanciaARecorrer * 2;
            let calculoCarga = this.carga - (distanciaReal * this.consumoCargaXMetro);
            this.carga = calculoCarga;
            return this.carga;
        } else {
            return "La distancia a recorrer supera la máxima distancia que puede recorrer."
        }

    }
}
console.log(autoMarte);
console.log(autoMarte.recoleccionMuestra(12, 26));
console.log(autoMarte.calcularDistanciaARecorrer(22));
autoMarte.nombre = "Autito para Marte";
console.log(autoMarte.nombre);
autoMarte["nombre"] = "AUTO, PARA, MARTEE";
console.log(autoMarte["nombre"]);

// Create, Read, Update, Delete -> CRUD

//Create:
autoMarte.hora = "21:00";

//Read:
console.log(autoMarte.hora);

//Delete:
delete autoMarte.hora;
console.log(autoMarte);


// Recorrer Propiedades

for (const cantRuedas in autoMarte) {
    if (Object.hasOwnProperty.call(autoMarte, cantRuedas)) {

        console.log(autoMarte[cantRuedas]);
        
    }
}


let carro = Object.keys(autoMarte);
console.log(carro);

for (let i = 0; i < carro.length; i++) {
    console.log(carro[i]);
}
*/
/*
let curso = {
    nombre: "React",
    dias: ["Lunes", "Miercoles", "Viernes"],
    alumnos: [
        {
        nombre:"Juan", 
        correo:"Albertoelmaskpodelmundo@gmail.com", 
        apellido:"Mainardi", 
        direccion:{
            calle:"Blas Parera", 
            altura: 100, 
            piso:1, 
            depto:"4E", 
            ciudad:"San Miguel de Tucumán",
            provincia:"Tucumán"}},

        {
        nombre:"Luis", 
        correo:"Luis23@gmail.com", 
        apellido:"Navas", 
        direccion:{
            calle:"Brasil", 
            altura: 150, 
            piso:1, 
            depto:"4E", 
            ciudad:"San Miguel de Tucumán", 
            provincia:"Tucumán"}}
    ],
    enviarEmail: function () {
        let alumnos = [];
        for (let i = 0; i < this.alumnos.length; i++) {
            alumnos.push(this.alumnos[i].correo);
            alumnos.push(this.alumnos[i].nombre);
            alumnos.push(this.alumnos[i].apellido);
            alumnos.push(this.alumnos[i].direccion);
            
        }
        return alumnos;
    }
}
// console.log(curso.enviarEmail());
*/
/*
function Alumno(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}
// const joel = new Alumno(prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), Number(prompt("Ingrese su edad en números")));
const joel = new Alumno("Joel", "Rodriguez", 24);
console.log(joel);

let docente = new Object();
docente.nombre = "Ángel";
docente["edad"] = 31;
console.log(docente);

let tutor = Object.create(docente);
tutor.nombre = "Luis"
tutor["edad"] = 40;
console.log(tutor);

// Comparar objetos
console.log(docente.nombre == tutor.nombre);
*/
// OBJETOS GLOBALES

// Object, Array, Function, Boolean, Number

//Objetos de utilidades
// Math, Date, RegExp

//Objetos de errores
// Error

console.log(Math.floor(Math.random()*10));