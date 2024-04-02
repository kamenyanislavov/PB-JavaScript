function godzillaKong(input) {

let budget = Number(input[0]);
let actorsQty = Number(input[1]);
let priceClothesPerActor = Number(input[2]);

let decorPrice = budget * 0.10;
let clothes = actorsQty * priceClothesPerActor;
let totalCost = decorPrice + clothes;

if (actorsQty > 150) {
    totalCost = decorPrice + (clothes * 0.90);
} totalCost = totalCost;

if (totalCost > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`);
}else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`);
}
}

godzillaKong(["20000", "120", "55.5"])
