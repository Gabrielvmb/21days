/*
let fome = prompt('Tu está com fome?\n1- Sim\n2 - Não');
let dinheiro = prompt('Tu está com dinheiro?\n1- Sim\n2 - Não');
let restaurante = prompt('O restaurante está aberto?\n1- Sim\n2 - Não');

if(fome === '2' || dinheiro === '2') {
  console.log('Hoje a janta será1 em casa');
} else if(fome === '1' && dinheiro === '1' && restaurante === '2') {
  console.log("Peça um delivery");
} else if(fome === '1' && dinheiro === '1' && restaurante === '1') {
  console.log('Hoje o jantar será no seu restaturante preferido')
}
*/
let nome = prompt('Teu nome: ');
let idade = prompt('Tua idade: ');
let cnh = prompt('Tem cnh?\n1 - Sim\n2 - Não ');
let carro = prompt('Tem carro?\n1 - Sim\n2 - Não ');

if(idade < 18 || cnh === '2') {
  console.log(`${nome}, você não pode dirigir`);
} else if(idade >= 18 && cnh === '1' && carro) {
  console.log(`${nome}, você pode dirigir mas não tem carro`);
} else {
  console.log(`${nome}, você será o motorista`);
}