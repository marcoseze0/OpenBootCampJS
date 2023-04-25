const productos = ['milanesa', 'Yerba', 'mayonesa', 'papel de cocina', 'esponja', 'Tomates'];
console.log(productos.length);

const agregarProducto = (producto) => {
    productos.push(producto)
}

const eliminarProducto = () => {
    productos.pop();
}

agregarProducto('aceite de girasol')
console.log(productos);
eliminarProducto();
console.log(productos);

const favMovie = [{
    titulo: 'La vida es Bella',
    director: 'Malevo',
    fecha: 1980,
},
{
    titulo: 'Titanic',
    director: 'AlPachino',
    fecha: 1995,
},
{
    titulo: 'Rapido y Furioso',
    director: 'TimBurton',
    fecha: 2015,
},
{
    titulo: 'Advengers',
    director: 'Tarantino',
    fecha: 2020,
}
]

const peliculasActuales = favMovie.filter((valor) => {
    console.log(valor.fecha);
    if (valor.fecha < 2010) {

        return true
    }
})

const directores = favMovie.map((valor) => {
    return valor.director
})

const titulosMovies = favMovie.map((valor) => {
    return valor.titulo
})

console.log(directores);
console.log(titulosMovies);


const listaNueva = directores.concat(titulosMovies);
console.log(listaNueva);
//Otra Forma con destructurin
const listaNueva1 = [...directores, ...titulosMovies];
console.log(listaNueva1);





