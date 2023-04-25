const fechaActual = new Date().toLocaleDateString('en-GB');
const fechaNacimiento = new Date('March 15,1990')
const fechaBool = fechaActual > fechaNacimiento
const dia = fechaNacimiento.getDate()
const mes = fechaNacimiento.getMonth()
const anio = fechaNacimiento.getFullYear()

console.log(dia);
console.log(mes + 1);
console.log(anio);







console.log(fechaBool);
console.log(fechaActual);
console.log(fechaNacimiento);

