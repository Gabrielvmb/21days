/*
let condition = true;
while (condition) {
  let nome = prompt('Digite seu nome:');
  let idade = parseInt(prompt('Digite sua idade:'));
  let peso = parseInt(prompt('Digite seu peso:'));
  let altura = parseFloat(prompt('Digite sua altura:'));
  let profisao = prompt('Digite seu profissão:');

  console.log(`Olá ${nome}, você tem ${idade} anos, é ${profisao}, tem ${altura}M de altura e pesa ${peso}`);

  if(idade >= 18) {
    console.log('Você está liberado para tomar umas geladas')
  } else {
    console.log('Sem geladas para você');
  }

  let semanas = idade * 52;
  let meses = idade * 12;
  let dias = idade * 365;

  console.log(`Sua idade em: Dias: ${dias}, Meses: ${meses}, Semanas: ${semanas}`);

  let imc = peso / (altura * altura);

  if(imc < 18,5) {
    console.log(`seu imc é ${imc}kg/m2: Magreza`);
  } else if(imc >= 18,5 && imc <= 24,9) {
    console.log(`seu imc é ${imc}kg/m2: Normal`);
  } else if(imc >= 24,9 && imc <= 30) {
    console.log(`seu imc é ${imc}kg/m2: Sobrepeso`);
  } else {
    console.log(`seu imc é ${imc}kg/m2: Obesidade`);
  }

  let anoAtual = 2023
  let anoNascimento = anoAtual - idade;
  console.log(`Ano de nascimento: ${anoNascimento}`);

  let anosDeIdade = 0;
  for (let i = anoNascimento; i <= anoAtual; i++) {
    console.log(`${i} - ${anosDeIdade} de idade`);
    anosDeIdade++;
  }

  let desejaContinuar = prompt('Deseja continuar?\n1- Sim\n2- Não');
  if(desejaContinuar !== '1') {
    condition = false;
  }
}
*/
let confirmar = true;
let nome;
let idade;
let salarioAtual;

while(confirmar) {
  nome = prompt('Insira seu nome: ');
  idade = prompt('Insira sua idade: ');
  salarioAtual = parseFloat(prompt('Insira seu salário atual: '));

  let prosseguir = Number(prompt('Digitou tudo certo? Deseja prosseguir?\n1- Sim\n2- Não'));
  if(prosseguir !== 1 && prosseguir !== 2) {
    alert('Opção invalida, digite 1 para prosseguir ou 2 para digitar novamente');
    confirmar = true;
  } else if(prosseguir === 2) {
    confirmar = true;
  } else {
    confirmar = false;
  }
}

let aumento = 0.015;

for (let ano = 1; ano <= 10; ano++){
  salarioAtual += salarioAtual * aumento;
  aumento *= 2;
  console.log((2023 + ano) + ' R$' + salarioAtual);
}