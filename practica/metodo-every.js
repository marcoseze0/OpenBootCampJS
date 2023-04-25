//Como podemos comparar listas
//.every()

const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];

// const resultado = array.every((valor) => {
//     if (valor < 0) {
//         return true;
//     }
//     else {
//         return false
//     }
// })

const resultado = array.every(valor => valor > 0)
console.log(resultado);


//COMPARACION DE LISTAS

const ar1 = [1, 2, 3, 4, 6]

const ar2 = [1, 2, 3, 4, 6]

console.log(ar1 === ar2);


const compararArray = (array1, array2) => {

    if (array1.length !== array2.length) return false
    const res = array1.every((valor, i) => valor === array2[i])
    return res
}

console.log(compararArray(ar1, ar2));