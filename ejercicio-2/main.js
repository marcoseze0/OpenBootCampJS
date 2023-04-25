const date = new Date(1990, 02, 15);
console.log(date);
let dia = date.getDay();
let mes = date.getMonth() + 1;
let ano = date.getFullYear();
// console.log(ano);
// console.log(mes);

const lista = ["Marcos", 33, true, [dia, mes, ano], {
    titulo: "El psicoanalista",
    autor: "John Katzenbach",
    fecha: " 2002",
    url: "https://es.wikipedia.org/wiki/El_psicoanalista"

}];

console.log(lista);




