function easterBakery(input) {

    let flourPrice = Number(input[0]);
    let flourQty = Number(input[1]);
    let sugarQty = Number(input[2]);
    let eggDozens = Number(input[3]);
    let yeastPacks = Number(input[4]);

    let sugarPrice = flourPrice * 0.75;
    let eggDozenPrice = flourPrice * 1.10;
    let yeastPrice = sugarPrice * 0.20;

    let moneyNeeded = flourPrice * flourQty + sugarPrice * sugarQty + eggDozenPrice * eggDozens + yeastPrice * yeastPacks;

    console.log(moneyNeeded.toFixed(2));

}

easterBakery(["50", "10", "3.5", "6", "1"])
