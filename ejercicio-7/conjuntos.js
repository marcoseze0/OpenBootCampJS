const flia = ['Romualdo', 'Remulo', 'Clotilda', 'Ramona', 'Tiffany', 'Dylan'];
console.log(flia);

const fliaSet = new Set(flia)
console.log(fliaSet);

fliaSet.add('Romualdo')
//No se agrega que que el set no permite datos repetidos
console.log(fliaSet);
//----------------------------------------------------------------------------------------------//


//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
fliaSet.add('JavaScript(JS)')
console.log(fliaSet);
