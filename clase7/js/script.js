// Vimos bucles while, do while, operadores, for.
/*
let x = 0
while (x < 10) {
    console.log(x);
    x++
}
*/
/*
let x = 0;
while (x < 10) {
    x++
    // console.log(x);
}

let a = 20;
do {
    a++
    // console.log(a);
} while (a < 20);
*/
// palabra reservada (Variable inicial; condición; incremento o decremento){ Instrucciones o sentencias }
/*
for(let i = 0; i < 10; i++){
    // console.log(2 * i);
}
*/
// arrays

// palabra-reservada nombre operador-de-asignación [valor1, valor2, ...];
/*
let alumnos = ["Cecilia", "Alberto", "Felipe", "Diego", "Guillermo",];
alumnos[alumnos.length] = "Lautaro";
// console.log(alumnos);
*/

// OBJETOS

// palabra-reservada nombre operador-de-asignación {propiedad: valor, propiedad2: valor2, ...}
/*
let mouse = {color: "verde", isWireless: false, numButtons: 3};
// console.log(mouse);
// console.log(mouse.color);
alumnos.push("Luciana", "Juan", "Ignacio");

let curso = {
    nombre: "Html, css y Javascript",
    duracion: "3 meses", 
    horario: {
        hora:"19:00 a 21:30", 
        dias: ["Martes","Jueves"]
    },
    docentes: ["Luis", "Ángel"],
    alumnos: alumnos
}
for (let i = 0; i < curso.docentes.length; i++){
    console.log(curso.docentes[i]);
}
for (let i = 0; i < curso.alumnos.length; i++) {
    console.log(curso.alumnos[i]);
}
*/

// TENEMOS UN AMIGO QUE TIENE UNA CAFETERÍA, NECESITA UNA APLICACIÓN PARA MOSTRAR LOS PRODUCTOS DEL MENÚ
/*
const cafeteria = [
    { nombre: "Café americano", categoria: "Bebida", cantidad: 20 },
    { nombre: "Croissant", categoria: "Alimento", cantidad: 15 },
    { nombre: "Tarta de manzana", categoria: "Postre", cantidad: 8 },
    { nombre: "Té verde", categoria: "Bebida", cantidad: 25 },
    { nombre: "Sandwich de pollo", categoria: "Alimento", cantidad: 10 },
    { nombre: "Brownie", categoria: "Postre", cantidad: 12 }
];

// Producto tipo cantidad
for (let i = 0; i < cafeteria.length; i++) {
    console.log("Producto: " + cafeteria[i].nombre + " tipo: " + cafeteria[i].categoria + " cantidad: " + cafeteria[i].cantidad);
}
const productos = [
    { nombre: "Manzanas", categoria: "Frutas", cantidad: 10 },
    { nombre: "Leche", categoria: "Lácteos", cantidad: 2 },
    { nombre: "Pan", categoria: "Panadería", cantidad: 5 },
    { nombre: "Zanahorias", categoria: "Verduras", cantidad: 8 }
];

// Crear un script para agregar más productos

productos[productos.length] = { nombre: "Bananas", categoria: "Frutas", cantidad: 12 };
// metodo para agregar un elemento al array en la última posición
productos.push( { nombre: "Queso", categoria: "Lácteos", cantidad: 19 } );
// siempre usamos dentro de un array el mismo tipo de dato
console.log(productos);

// Crear un script para guardar datos en el array productos
// Ventana emergente para confirmar si seguimos agregando o no.

let continuar;
do{
    let nombre = prompt("Ingrese el nombre del producto");
    let categoria = prompt("Ingrese la categoría del producto");
    let cantidad = Number(prompt("Ingrese el stock del producto"));
    if (nombre == null || categoria == null || cantidad == 0 || Number.isNaN(cantidad) ){
        continuar = confirm("Faltan datos o hay datos incorrectos. Por favor, vuelve a intentarlo");
    } else {
        productos.push({ nombre: nombre, categoria: categoria, cantidad: cantidad });
        continuar = confirm("Presiona aceptar para seguir agregando productos o cancelar");
    }

} while (continuar);
console.log(productos);
*/

// let num = Number(prompt("ingresa un número"));
// alert(typeof num);
// document.write(num);
// alert(Number.isNaN(num));
