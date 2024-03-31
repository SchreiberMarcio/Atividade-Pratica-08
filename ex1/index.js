/*
Desenvolva um algoritmo para percorrer um vetor de 15 elementos
inteiros já preenchido e imprima todos os valores pares.
*/
let vetor = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44];

function imprimirPares(vetor) {
  console.log("Valores pares:");
  vetor.forEach((elemento) => {
    if (elemento % 2 === 0) {
      console.log(elemento);
    }
  });
}

imprimirPares(vetor);
