import * as moduloMatematicas from './modulos/matematicas.js';
import getAutor, { libro } from './modulos/literatura.js';

const sum = moduloMatematicas.suma(123123, 213123)

console.log(sum);

const potencia = moduloMatematicas.eleva(2, 21);
console.log(potencia);

console.log(getAutor());
console.log(libro);

//const sum;
