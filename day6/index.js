/*
let valor = parseInt(prompt('Digite um número interio e positivo chefe:'));

for (let i = 0; i <= valor; i++) {
  console.log(i);
}

for (let i = 0; i <= 50; i += 5) {
  console.log(i);
}

for (let i = 50; i <= 0; i -= 5) {
  console.log(i);
}
*/

let number = Number(prompt('digite um número:'));

for(let i = 1; i <= 3; i++) {
  console.log(`tabuada do número: ${number}`)
  for (let j = 1; j <= 10; j++) {
    console.log(`${number} x ${j} = ${number * j}`);
  }
  number++;
}