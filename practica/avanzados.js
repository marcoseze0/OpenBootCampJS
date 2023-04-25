//Trabajar con metodos mas avanzados
//.map() .filter() .reduce()

const provincias = ['Cordoba', 'La Rioja', 'Santa Fe', 'La Pampa', 'Buenos Aires', 'San Luis', 'Mendoza'];


const val = provincias.forEach(v => {
    console.log(v)
    return true
});

console.log(val);
//METODO .map()
const newArray = provincias.map((valor, indice) => `${indice + 1}- ${valor}`)

console.log(newArray);

//METODO .filter()

const arrayObj = [
    { nombre: 'Leire', edad: 35 },
    { nombre: 'Gorka', edad: 34 },
    { nombre: 'Miguel', edad: 32 },
    { nombre: 'Ramiro', edad: 25 },
    { nombre: 'Lucia', edad: 18 }
]

// const personasMayores = arrayObj.filter(obj => {
//     if (obj.edad > 30) {
//         return true;
//     }
//     else {
//         false
//     }
// })

//Mejorado

const personasMayores = arrayObj.filter(obj => obj.edad > 30)
console.log(personasMayores);

const nuevaLista = arrayObj.filter(obj => obj.nombre !== 'Miguel');
console.log(nuevaLista);



//Metodo .reduce()

const valores = [
    3, 56, 23, 5, 90, 100
]
const suma = valores.reduce((acu, cur, i, array) => {
    console.log(acu);
    console.log(cur);
    console.log(i);
    console.log(array);
    return acu + cur
})

console.log(suma);