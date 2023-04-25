const nom = 'marcos'
saludar(nom)
function saludar(nombre) {
    console.log(` Hola: ${nombre}`);
}



let nombre_2 = 'Juan'

const persona = { nombre: 'Juan', apellido: 'Gonzalez' }

function despedir(nombre) {
    nombre = 'Ramiro';
    console.log(`Adios: ${nombre}`);
}


function saludarPersona(objeto) {
    objeto.apellido = 'Munioz'
    console.log(`Hola  ${objeto.nombre} ${objeto.apellido}`);
}

saludarPersona(persona)

console.log(persona);


function imprimeNumero(numero = 7) {
    console.log(numero);
}

imprimeNumero();

function imprimir(...parametros) {
    console.log(parametros);
}

imprimir(1, 3, 9, 2, 'Hola', { id: 9 })

function suma(...nums) {

    console.log(nums.reduce((a, b) => a + b));
}

suma(1, 2, 3, 4, 9)
