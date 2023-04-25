let altura = parseInt(175);
let alturaMetros = parseFloat(altura / 100);
let pesoKilo = parseFloat(73);
let alturaRedondeada = Math.round(alturaMetros, -1);
let pesoKiloRedondeado = Math.floor(pesoKilo)
//Resutlados
console.log(alturaMetros);
console.log(alturaRedondeada);
console.log(pesoKiloRedondeado);

let minPrecision = Number.EPSILON;
console.log(minPrecision);

let valorMaximo = Number.MAX_VALUE + 1;
console.log(valorMaximo);
console.log(Number.MAX_VALUE);