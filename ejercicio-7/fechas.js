const fecha = new Date();
console.log(fecha);

const fecha2 = new Date(1990, 2, 15, 18, 40, 00)
console.log(fecha2);

const fecha3 = fecha - fecha2;

console.log(fecha3 > fecha3);

const dia = fecha2.getDate()
const mes = fecha2.getMonth()
const anios = fecha2.getFullYear()

console.log(dia);
console.log(mes + 1);
console.log(anios);

const fechaactual = new Date().toLocaleDateString('en-GB');
console.log(fechaactual);
