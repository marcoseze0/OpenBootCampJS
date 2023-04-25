const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzalez",
    isDeveloper: true,
    libros_favoritos: ["El metodo", "El codigo de la manifestacion"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.libros_favoritos);

console.log(obj["4-juegos"]);

const prop = 'isDeveloper';

console.log(prop);
console.log(obj[prop]);


const obj2 = obj;
console.log(obj2);

obj2.nombre = 'Inigo';
console.log(obj2.nombre);

console.log(obj.nombre);

const obj3 = { ...obj };
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = 'marcos';


console.log(obj.nombre);
console.log(obj3.nombre);


//COMO ORDENAR LISTAS EN FUNCION DE UNA PROPIEDAD

const listaPeliculas = [
    { titulo: 'Lo que le viento se llevo', anio: 1939 },
    { titulo: 'Titanic', anio: 1997 },
    { titulo: 'Moana', anio: 2016 },
    { titulo: 'El efecto mariposa', anio: 2004 },
    { titulo: 'TED', anio: 2012 }
]


console.log(listaPeliculas);
//Metodo .sort()--> MUTA EL VALOR DE LA LISTA ORIGINAL
listaPeliculas.sort((a, b) => {
    a.anio - b.anio
})


console.log(listaPeliculas);



