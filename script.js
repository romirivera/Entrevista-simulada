//funcion usando el metodo .map. Tomar el array num de 1-4 y transformarlos en un nuevo array que suceda al numero
const array = [1, 2, 3, 4];
function sucesionNumeros(numero) {
  return numero.map((num) => num + 1);
}

console.log(sucesionNumeros(array));
