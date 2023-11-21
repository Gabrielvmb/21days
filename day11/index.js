/*
let students = [];
let notas = [];
let index = 0;
let condition = true;


while (condition) {
  students[index] = prompt('Name:');
  notas[index] = parseInt(prompt('Nota:'));
  counter++;
  
  let continuar = prompt('deseja continuar?\n1 - Yes\n2 - No');
  if(continuar !== '1') {
    condition = false;
  }
}

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
  console.log(`Mr(s).${students[i]}, got ${notas[i]}`);
  somaNotas += notas[i];
}

let studentsAverage = somaNotas / students.length;
console.log(`media: ${studentsAverage}`); 
*/

let models = [];
let years = [];
let prices = [];
let index = 0;

let condition = true;

while (condition) {
  models[index] = prompt('What is the car model?');
  years[index] = Number(prompt('What year is the car?'));
  prices[index] = parseFloat(prompt('What is the value of the car?'));
  index++;
  
  let option = Number(prompt('Do u wanna keep going?\n1 - Yes\n2 - No'));
  if(option !== 1) {
    condition = false;
  }
}

for(let i = 0; i < models.length; i++) {
  console.log(`${models[i]}, ${years[i]} Price: ${prices[i]}`);
}

/*
let newArray = [];
let newIndex = 0;
let biggestPrice = 0;




for (let index = 0; index < prices.length; index++) {
  if(prices[i] > biggestPrice) {
    biggestPrice = prices[i];
  }
  newArray[newIndex] = prices[i];
}
*/
for (let j = 0; j < prices.length; j++) {
  if(prices[i] > prices[i + 1]) {
    let tempPrice = prices[i + 1];
    prices[i + 1] = prices[i];
    prices[i] = tempPrice;

    let tempModels = models[i + 1];
    models[i + 1] = models[i];
    models[i] = tempModels;

    let tempYears = years[i + 1];
    years[i + 1] = years[i];
    years[i] = tempYears;
  }
}


