/*
Desenvolva um algoritmo que declare uma lista de 10 números e
solicite um número para o usuário e no final informe se o número
que o usuário digitou está dentro da lista ou não.
*/

let lista = [1, 46, 84, 35, 15, 68, 81, 67, 64, 18];

function verificaNumero() {
  let numeroUsuario = parseInt(prompt("Digite um número:"));
  if (lista.includes(numeroUsuario)) {
    alert(`O número ${numeroUsuario} está na lista.`);
  } else {
    alert(`O número ${numeroUsuario} não está na lista.`);
  }
}

verificaNumero();
