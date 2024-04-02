function vegsFruitsEuro(input){
let vegPrice = input[0];
let fruitPrice = input[1];
let vegWeight = input[2];
let fruitWeight = input[3];

let sumLeva = (vegPrice * vegWeight) + (fruitPrice * fruitWeight);
let sumEuro = sumLeva / 1.94;

console.log(sumEuro.toFixed(2));
}

vegsFruitsEuro([0.194, 19.4, 10, 10])