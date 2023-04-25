//Formas de importar y exportar modulos
//1. CommonJS - require
//2. Import ES6 - import

const moduloMatematicas = require("./matematicas")
console.log(moduloMatematicas.factorial);


const fact = moduloMatematicas.factorial(5)
console.log(fact);

const sum = moduloMatematicas.suma(23123,123123)
console.log(sum);
