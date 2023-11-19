/*
let numero = 8;
let array = [21, 8, 9, 6, 4, 8, 15, 4, 3, 5];

for (let i = 0; i < array.length; i++) {
  if(array[i] == numero) {
    console.log(`Número aparece no índice: ${i}`);
  }
}
*/
/*
let array = [];

for (let i = 0; i < 5; i++) {
  let numero = Number(prompt(`Me de seu ${i + 1}° número`));
  array[i] = numero;
}
console.log(array);

let tamanhoArray = array.length;

for (let i = 0; i < tamanhoArray / 2; i++) {
  //Trocar os elementos usando uma variável temporaria
  let temp = array[i];
  array[i] = array[tamanhoArray - 1 - i];
  array[tamanhoArray - 1 - i] = temp;
}

console.log(array);
*/



/*
let array = [];
let numUser = Number(prompt('Quantos números você deseja colocar no array?'));

for (let i = 0; i < numUser; i++) {
  let numero = Number(prompt(`Me de seu ${i + 1}° número`));
  array[i] = numero;
}
console.log(array);

let tamanhoArray = array.length;

for (let j = 0; j < tamanhoArray / 2; j++) {
  let temp = array[j];
  array[j] = array[tamanhoArray - 1 - j]
  array[tamanhoArray - 1 - j] = temp;
}

console.log(array);
*/

let arrayD = [];
let arrayInvertidoD = [];
let quantidade = parseInt(prompt('Digite a quantidade de números para inserir no array'));

for(let i = 0; i < quantidade; i++) {
  let numero = parseInt(prompt(`Digite o ${i + 1}° número`));
  arrayD[i] = numero;
}
console.log(`Array original ${arrayD}`);

let contador = quantidade - 1;
for (let j = 0; j < 5; j++) {
  arrayInvertidoD[j] = arrayD[contador];
  contador--;
}
console.log(`Array invertido: ${arrayInvertidoD}`);