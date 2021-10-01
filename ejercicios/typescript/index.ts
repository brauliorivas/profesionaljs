console.log('Hello TypeScript');

// function add(a: number, b: number) {
//     return a + b;
// }

// const sum = add(2, 3);

// Tipos

let muted: boolean = true;
muted = false;

let age = 6
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = 'Braulio';
let saludo: string = `Me llamo ${nombre}`;      

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
//people.push("9000")

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Braulio');
peopleAndNumbers.push(9001);

// Enums

enum Color {
    Rojo = "Rojo", 
    Verde = "Verde", 
    Azul = "Amarillo",
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es el ${colorFavorito}`);


// Any 
let comodin: any = "Joker";
comodin = { type: "Wildcard"}

// Object

let someObject: object = { type: "Wildcard"};

// Funciones

function add(a: number, b: number): number { //Retorna un numero
    return a + b;
}

const sum = add(4, 6);

function createAdder (a: number): (number) => number { // Le indicamos que regresa una función y esa función le pasamos un parametro y luego regresa un numero
    return function(b: number) {
        return a + b;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6)

function fullName(firstName: string, lastName: string = 'Smith'): string { //Valor por defecto o le ponemos uno nuestro
// lastName ?: string, admite un valor o undefined, no hay valor por defecto, osea puede ser que haya y si no, no regresa nada
    return `${firstName} ${lastName}`;
}

const braulio = fullName("Agente");
console.log(braulio)

//Interfaces

interface Rectangulo {
    ancho: number
    alto: number
    color?: Color // Opcional que tenga o no color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    // color: Color.Rojo,
}

function area(r: Rectangulo): number {
    return r.ancho * r.alto;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString())