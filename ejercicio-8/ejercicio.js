function verdadero() { return true };

console.log(verdadero());

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola soy una promesa')
    }, 2000)
})

myPromise
    .then((valor) => {
        console.log(valor);
    })
    .catch((erorr) => {
        console.log(error);;
    })


function* generadorIndicesPares() {
    let indice = 0;
    while (indice <= 20) {
        yield indice;
        indice += 2;
    }
}

var gen = generadorIndicesPares();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
