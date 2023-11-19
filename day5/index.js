let num1 = Number(prompt('Give me one number:'));
let num2 = Number(prompt('Give me another number:'));
let operation = prompt('1 - somar\n2 - subtrair\n3 - multiplicar\n4 - dividir');

switch (operation) {
  case '1':
    console.log(`resultado: ${num1 + num2}`);
    break;
  case '2':
    console.log(`resultado: ${num1 - num2}`);
    break;
  case '3':
    console.log(`resultado: ${num1 * num2}`);
    break;
  case '4':
    console.log(`resultado: ${num1 / num2}`);
    break;
  default:
    break;
}

let opcoes = prompt('Bem vindo ao posto dev:\n1 - gasolina\n2 - álcool\n3 - calibrar');
let valor = 0;
let quantidade;
let litro;
if(opcoes === '1') {
  valor = 5;
} else {
  valor = 3;
}

switch (opcoes) {
  case '1':
    valor = parseInt(prompt('Qual seria o valor senhor(a)?'));
    litro = 5;
    quantidade = valor * litro;
    console.log(`quantidade abstecida: ${quantidadeG}`);  
    break;
  case '2':
    let valor = parseInt(prompt('Qual seria o valor senhor(a)?'));
    litro= 3;
    quantidade = valor * litro;
    console.log(`quantidade abstecida: ${quantidadeA}`);  
    break;
  case '3':
    console.log(`pneus calibrados com sucesso`);
  default:
    console.log(`opção invalida amigo`);
    break;
}