/*
Desenvolva um algoritmo para percorrer um vetor de 20 elementos
inteiros e no final mostre a soma de todos os elementos.
*/

let vetor = [
  2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59,
  62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92, 95, 98, 101, 104, 107, 110, 113,
  116, 119, 122, 125, 128, 131, 134, 137,
];

function soma(vetor) {
  let somaTotal = 0;
  vetor.forEach((elemento) => {
    somaTotal += elemento;
  });
  return somaTotal;
}

console.log("Soma de todos os elementos:", soma(vetor));
