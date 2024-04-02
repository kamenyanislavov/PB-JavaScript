function movieBudget(input) {
let budget = Number(input[0]);
let mutes = Number(input[1]);
let priceClothes = Number(input[2]); // price clothes per one mute

let decore = budget * 0.1;
if (mutes > 150) {
    priceClothes = priceClothes * 0.9;
}
if ((priceClothes * mutes + decore) > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${((priceClothes * mutes + decore) - budget).toFixed(2)} leva more.`);
} else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${(budget - (priceClothes * mutes + decore)).toFixed(2)} leva left.`);
}
}

movieBudget(["9587.88", "222", "55.68"])