/*
Desenvolva um algoritmo que preenche um vetor com os 4
primeiros números perfeitos.
*/

function isNumeroPerfeito(num) {
  let somaDivisores = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      somaDivisores += i;
    }
  }
  return somaDivisores === num;
}
function preencheVetor() {
  let numero = 1;
  while (vetor.length < 4) {
    if (isNumeroPerfeito(numero)) {
      vetor.push(numero);
    }
    numero++;
  }
}
let vetor = []
preencheVetor();

console.log("Os 4 primeiros números perfeitos:", vetor);
