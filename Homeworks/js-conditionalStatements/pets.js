function petFood(input) {
let days = input[0]; //days the girl is missing
let kgFood = input[1]; //available food in kg
let dogFood = input[2]; // kg of dog food per day
let catFood = input[3];
let turtleFood = input[4];

let foodNeeded = days * dogFood + days * catFood + days * turtleFood / 1000;

if (kgFood >= foodNeeded) {
    console.log(`${Math.floor(kgFood - foodNeeded)} kilos of food left.`);
} else {
    console.log(`${Math.ceil(foodNeeded - kgFood)} more kilos of food needed.`);
}
}

petFood([5, 10, 2.1, 0.8, 321])