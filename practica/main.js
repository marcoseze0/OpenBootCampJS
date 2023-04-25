

const provincias = ['Cordoba', 'Santa Fe', 'La Pampa', 'Buenos Aires', 'San Luis', 'Mendoza'];

//Forma Antigua y poca eficiente
for (let i = 0; i < provincias.length; i++) {
    console.log(provincias[i]);
}

//Forma ES6 forEach mas eficiente
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let suma = 0;
valores.forEach(element => {
    console.log(suma);
    suma += element;
    console.log(element);
    console.log(suma);
});


//Busqueda dentro de una lista con find
let entrada = provincias.find(valor => {
    if (valor === 'Cordoba') {
        return true
    }
    else {
        return false
    }
})

console.log(entrada);

//Lista de Objetos
const listaObjetos = [
    { nombre: 'Leire', edad: 35 },
    { nombre: 'Gorka', edad: 34 },
    { nombre: 'Miguel', edad: 32 },
    { nombre: 'Ramiro', edad: 25 },
    { nombre: 'Lucia', edad: 18 }
]

const usuario = listaObjetos.find(o => {
    if (o.nombre === 'Miguel') {
        return true;
    }
})

console.log(usuario.edad);
//Forma mas corta
const usuario1 = listaObjetos.find(o => o.nombre === 'Miguel')
console.log(usuario1.edad);

//Con deconstruccion de objetos
const { edad } = listaObjetos.find(o => o.nombre === 'Diego');
console.log(edad);
