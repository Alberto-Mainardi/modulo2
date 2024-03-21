// NOTACIÓN LITERAL
/*
const juego = {

    altura: '1000px',
    ancho: '3000px',
    personaje: [
        {
            visible: true,
            vidas: 3,
            puntos: 0
        }
    ],
    enemigos: [
        {
            visible: true,
            animacion: true,
            resistencia: 25
        }
    ],
    saltar: function (personaje) {
        personaje.coord.y = personaje.coord.y + 10;
    },
    caminar: function (personaje) {
        personaje.coord.x = personaje.coord.x + 10;
    }
}

// Función CONSTRUCTORA

function Clientes(nombre, apellido, direccion, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
}

// INSTANCIAMOS LA FUNCIÓN
let carmenRamirez = new Clientes("Carmen", "Ramirez", "Juan B Justo 532", 3816667223);
console.log(carmenRamirez.apellido);

const obj = new Object();

obj.nombre = "Juego¿";
obj["numero"] = 133;

console.log(obj);

let juego2 = Object.create(obj);
juego2.name = "Mario";
juego2.puntos = 148873482;
console.log(juego2);

class Vehiculo{
    // ruedas, velocidades, volante
    constructor(ruedas, velocidades, volante) {
        this.ruedas = ruedas;
        this.velocidades = velocidades;
        this.volante = volante;
    }
}

const vehiculo = new Vehiculo(4, 6, true);
// console.log(vehiculo);

class Auto extends Vehiculo{
    constructor(ruedas, velocidades, volante, marca) {
        super(ruedas, velocidades, volante);
        this.marca = marca
    }
}
let auto = new Auto(4, 5, true, "Chevrolet");
let auto2 = new Auto(4, 6, true, "Ford");
let auto3 = new Auto(4, 5, true, "Tesla");
console.log(auto);
console.log(auto2);

class Moto extends Vehiculo{
    constructor(ruedas, velocidades, volante, marca){
        super(ruedas, velocidades, volante);
        this.marca = marca;
    }
}
let moto = new Moto(2, 6, true, "Kawasaki")
console.log(moto);


class Estudiante{
    constructor(nombre, apellido, correo, direccion, nota, numeroAlumno) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.direccion = direccion;
        this.nota = nota;
        this.numeroAlumno = numeroAlumno;
    }
}
let alumno = new Estudiante("José", "Mainardi", "albertocorreo@gmail.com", "Blas Parera 560", 10, 1);

console.log(alumno);

class Cafetera{

    // ENCAPSULACION
    static id = 0;
    #azucar = 0;
    // *******************
    constructor(cafe, agua) {
        this.cafe = cafe;
        this.agua = agua;
        Cafetera.id = Cafetera.id + 1;
        this.id = Cafetera.id
    }
    prepararCafe(){

        if (this.cafe) {
            if (this.agua) {
                return "Espere un momento, su café se está preparando con " + this.#azucar + " cubos de azucar";
            } else {
                return "NO TIENE AGUA";
            }
        } else {
            return "NO TIENE CAFE";
        }
    }
    agregarCafe(){
        // this.cafe = true;
        this.cafe = this.#cambiarValor(this.cafe);
        return "Se está agregando café";
    }
    agregarAgua(){
        this.agua = true;
        return "Se está agregando agua";
    }
    agregarAzucar(){
        this.#azucar = this.#azucar + 1;
        return "Se está agregando un cubo de azucar";
    }

    #cambiarValor(val){
        return !val;
    }

}
let cafe = new Cafetera(false, false);
let cafe2 = new Cafetera(false, true);

console.log(cafe.prepararCafe());

if (cafe.cafe == false) {
    cafe.agregarCafe();
    console.log("Se está agregando el café");
}
if (cafe.agua == false) {
    cafe.agregarAgua();
    console.log("Se está agregando el agua");
}

console.log(cafe.prepararCafe());

console.log(cafe.agregarAzucar());

console.log(cafe.prepararCafe());
console.log(Cafetera.id);

console.log(cafe2.prepararCafe());
console.log(cafe2.agregarCafe());
console.log(cafe2.agregarAzucar());
console.log(cafe2.agregarAzucar());
console.log(cafe2.prepararCafe());
*/

/*
class Empresa {
    #cuil;
    #nombre;
    #telefono;
    constructor(cuil, nombre, telefono) {
        this.#cuil = cuil;
        this.#nombre = nombre;
        this.#telefono = telefono;
    }

    // Get methods
    getCuil(){
        return this.#cuil;
    }
    getNombre(){
        return this.#nombre;
    }
    getTelefono(){
        return this.#telefono;
    }

    // Set methods
    setCuil(cuil){
        this.#cuil = cuil;
    }
    setNombre(nombre){
        this.#nombre = nombre;
    }
    setTelefono(telefono){
        this.#telefono = telefono;
    }
}
let empresa = new Empresa(234565432, "RollingCode");
console.log(empresa.getCuil());
console.log(empresa.setCuil(234856942));
console.log(empresa.getCuil());
console.log(empresa.getNombre());
*/

// Ejercicio 3

class Persona {

    #nombre;
    #apellido;
    #altura;
    #peso;
    #edad;
    #genero;


    constructor (nombre, apellido, altura, peso, edad, genero) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#altura = altura;
        this.#peso = peso;
        this.#edad = edad;
        this.#genero = genero;
    }

    describir(){
    return this.nombreYApellido() + "," +
    this.medirAltura() + "," + 
    this.medirPeso() + "," +
    this.medirEdad() + "," +
    this.generoDePersona();
    }

    nombreYApellido(){
        return this.#nombre + " " + this.#apellido ;
    }

    medirAltura(){
        if (this.#altura < 150) {
            return " es una persona baja";
        } else if (this.#altura < 170) {
            return " es una persona de estatura normal";
        } else {
            return " es una persona alta";
        }
    }

    medirPeso(){
        if (this.#peso < 50) {
            return " es liviana";
        } else if (this.#peso < 75) {
            return " es de peso promedio";
        } else {
            return " es pesada";
        }
    }

    medirEdad(){
        if (this.#edad < 25) {
            return " es joven";
        } else if (this.#edad < 60) {
            return " es de edad media";
        } else {
            return " es una persona mayor";
        }
    }

    generoDePersona(){
        return " su género es " + this.#genero;
    }
}

class Empleado extends Persona {

    #cargo;

    constructor (nombre, apellido, altura, peso, edad, genero, cargo) {
        super(nombre, apellido, altura, peso, edad, genero);
        this.#cargo = cargo;
    }

    describir(){
        return this.nombreYApellido() + "," +
        this.medirAltura() + "," + 
        this.medirPeso() + "," +
        this.medirEdad() + "," +
        this.generoDePersona() + "," +
        this.cargoDePersona();
        }

    cargoDePersona(){
        return " Su cargo es: " + this.#cargo
    }
}


let persona = new Persona("Juan", "González", 175, 49, 22, "masculino",);

console.log(persona.describir());

let empleado = new Empleado("Alberto", "Moreno", 172, 65, 21, "masculino", "Supervisor de ventas");
console.log(empleado.describir());