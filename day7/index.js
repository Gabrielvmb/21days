/*
let nota;
let sexo;
let alunos = 0;
let totalNotas = 0;
let mediaGeral;
let homensNotas = 0;
let mulheresAcimaSete = 0;
let maiorNotaHomens = 0;

let cadastrar = true;

while(cadastrar) {
  nota = Number(prompt('Digite a nota do aluno:'));
  totalNotas += nota;
  alunos++;
  
  sexo = Number(prompt('Digite o sexo do(a) aluno(a):\n1 - Homem\n2 - Mulher'));

  if(sexo === 1) {
    if(nota > maiorNotaHomens) {
      maiorNotaHomens = nota;
    }
    homensNotas++;
  }

  if(sexo === 2 && nota > 7) {
    mulheresAcimaSete++;
  }

  let continuar = Number(prompt('Deseja continuar?\n1 - Sim\n2 - Não'));
  if(continuar === 2) {
    cadastrar = false;
  }
}

mediaGeral = totalNotas / alunos;

console.log(`media geral: ${mediaGeral}`);
console.log(`Homens que enviaram notas: ${homensNotas}`);
console.log(`mulheres acima de 7: ${mulheresAcimaSete}`);
console.log(`maior nota entre homens: ${maiorNotaHomens}`);
*/

let maiorValor = 0;
let mediaValores;
let valoresInseridos = 0;
let qtdValores = 0;
let saldo = 50;
let continuar = true;

let nome = prompt('Teu nome: ');
let cpf = prompt('Teu cpf: ');
console.log(`Olá, ${nome}, do cpf: ${cpf}`);

do {
  let valor = parseFloat(prompt('um valor: '));
  let opcao = parseInt(prompt('1- Saque\n2- Deposito'));  

  qtdValores++;
  valoresInseridos += valor;

  if(valor > maiorValor) {
    maiorValor = valor;
  }

  if(opcao === 1) {
    if(valor > saldo) {
      console.log('Não é possível sacar um valor maior que o seu saldo');
    } else if (valor < 0) {
      console.log('Não é possível sacar um valor menor do que zero');
    } else  {
      saldo -= valor;
    }
  } else if (opcao === 2) {
    if (valor < 0) {
        console.log('Não é possível depositar um valor negativo');
    } else {
        saldo += valor;
    }
  }
/*
  if(opcao === 1 && valor > saldo) {
    console.log('Não é possível sacar um valor maior que o seu saldo');
  } else if(opcao === 1 && valor < 0) {
    console.log('Não é possível sacar um valor menor do que zero');
  } else {
    saldo -= valor;
  }   

  if(opcao === 2 && valor < 0) {
    console.log('Não é possível depositar um valor negativo');
  } else {
    saldo += valor;
  }
*/
  let desejaContinuar = Number(prompt('Deseja continuar?\n1- Sim\n2- Não'));
  if(desejaContinuar === 2) {
    continuar = false;
  }

} while (continuar);

mediaValores = valoresInseridos / qtdValores;

console.log(`este é o seu saldo atual: ${saldo}`);
console.log(`este é o maior valor inserido: ${maiorValor}`);
console.log(`esta é a media dos valores inseridos: ${mediaValores}`);