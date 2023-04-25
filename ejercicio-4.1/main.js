let nombre = "Marcos Ezequiel";
let apellido = "Munoz";
let estudiante = `${nombre} ${apellido}`
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLocaleLowerCase();
let cantidadLetras = estudiante.length
let primeraLetra = estudiante.slice(0, 1);
let ultimaLetra = estudiante.slice(cantidadLetras - 1)
let trimEstudiante = estudiante.trim();
// let verdadero = estudiante.includes('Marcos')

console.log(estudiante);
//Otra forma de Concatenar
let estudiante_1 = apellido.concat(" " + nombre);
console.log(estudiante_1);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(cantidadLetras);
console.log(primeraLetra);
console.log(ultimaLetra);
console.log(trimEstudiante);


//Probando con funciones Include 
//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
function verificar() {
    let check = estudiante.toLocaleLowerCase();
    return check.includes('marcos');
}

console.log(verificar());





