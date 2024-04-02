function harvestDistribution(input) {
let vineyardArea = input[0]; //area in square meters
let yield = input[1]; //kg of grapes per square meter
let wineGoal = input[2]; //liters of wine to be produced
let workers = input[3]; //number of workers

let totalYield = vineyardArea * yield;
let wine = totalYield * 0.40 / 2.5;

if (wine < wineGoal) {
    console.log(`It will be a tough winter! More ${Math.floor(wineGoal - wine)} liters wine needed.`);
} else {
    console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
    console.log(`${Math.ceil(wine - wineGoal)} liters left -> ${Math.ceil((wine - wineGoal) / workers)} liters per person.`);
}
}

harvestDistribution([650, 2, 175, 3])