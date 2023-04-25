//METODO .SOME()
const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -21];



const res = array.some(valor => valor > 0);

console.log(res);

const existe = array.some(valor => valor === 90)
console.log(existe);


const arrayObj = [
    { nombre: 'Leire', edad: 35 },
    { nombre: 'Gorka', edad: 34 },
    { nombre: 'Miguel', edad: 32 },
    { nombre: 'Ramiro', edad: 25 },
    { nombre: 'Lucia', edad: 18 }
]

const existePersona = arrayObj.some(persona => persona.nombre === 'iguel');
console.log(existePersona)

//Como obtener una lista a partir de un objeto Iterable
const str = 'Hola soy Gorka';
console.log(str[5]);

const ar_str = Array.from(str)
console.log(ar_str);
const set = new Set([2, 3, 'hola,4'])
const ar_set = Array.from(set)
console.log(ar_set);

