let nome = prompt('Qual é o teu nome?');
let idade = Number(prompt('Qual a tua idade?'));
let altura = parseFloat(prompt('Qual é a tua altura?'));
let peso = parseInt(prompt('Qual é o teu peso?'));

let anoNascimento = 2023 - idade;
let imc = peso / (altura * altura);

console.log(`Olá ${nome}, você tem ${idade}, nasceu em ${anoNascimento}, tem ${altura}, pesa ${peso}kg seu IMC é ${imc}Kg/m2`);