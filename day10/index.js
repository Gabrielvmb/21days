
let numero = 8;
let array = [21, 8, 9, 6, 4, 8, 15, 4, 3, 5];

for (let i = 0; i < array.length; i++) {
  if(array[i] == numero) {
    console.log(`Número aparece no índice: ${i}`);
  }
}


let array2 = [];

for (let i = 0; i < 5; i++) {
  let numero = Number(prompt(`Me de seu ${i + 1}° número`));
  array2[i] = numero;
}
console.log(array2);

let tamanhoArray = array2.length;

for (let i = 0; i < tamanhoArray / 2; i++) {
  //Trocar os elementos usando uma variável temporaria.
  let temp = array2[i];
  array2[i] = array2[tamanhoArray - 1 - i];
  array2[tamanhoArray - 1 - i] = temp;
}

console.log(array2);





let array3 = [];
let numUser = Number(prompt('Quantos números você deseja colocar no array?'));

for (let i = 0; i < numUser; i++) {
  let numero = Number(prompt(`Me de seu ${i + 1}° número`));
  array3[i] = numero;
}
console.log(array3);

let tamanhoArray2 = array3.length;

for (let j = 0; j < tamanhoArray2 / 2; j++) {
  let temp = array3[j];
  array3[j] = array[tamanhoArray2 - 1 - j]
  array3[tamanhoArray2 - 1 - j] = temp;
}

console.log(array3);



let currentNum = parseInt(prompt('Digite um número inteiro e positivo ae:'));

let arrayFibonacci = [];

let previousNum = currentNum - 1;


arrayFibonacci[0] = previousNum;
arrayFibonacci[1] = currentNum;

for (let i = 2; i <= 10; i++) {
  arrayFibonacci[i] = arrayFibonacci[i - 1] + arrayFibonacci[i - 2];
}
console.log(arrayFibonacci);

