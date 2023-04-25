const frase = document.getElementById('parrafo');
const btn = document.getElementById('btn');


const suma = document.getElementById('btn-suma')
const resta = document.getElementById('btn-resta')
const cantidad = document.getElementById('btn-cantidad')

let contador = 0;







suma.addEventListener("click", function () {
    contador++
    console.log(contador);
    cantidad.innerHTML = contador;

});

resta.addEventListener("click", function () {
    contador--
    console.log(contador);
    cantidad.innerHTML = contador;


});




