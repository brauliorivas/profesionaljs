console.log('Hello TypeScript');

function add(a: number, b: number) {
    return a + b;
}

const sum = add(2, 3);

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