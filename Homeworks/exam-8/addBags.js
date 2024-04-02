function addBag(input) {

    let feeAbove20kg = Number(input[0]);  // price for luggage above 20 kg
    let bagWeight = Number(input[1]);
    let timeToJurnay = Number(input[2]);
    let bagsQty = Number(input[3]);

    let totalWeight = bagWeight * bagsQty;
    let pricePerBag = 0;

    if (bagWeight < 10) {
        pricePerBag = feeAbove20kg * 0.20;
    } else if (bagWeight <= 20) {
        pricePerBag = feeAbove20kg * 0.50;
    } else {
        pricePerBag = feeAbove20kg;
    }

    if (timeToJurnay < 7) {
        pricePerBag *= 1.40;
    } else if (timeToJurnay <= 30) {
        pricePerBag *= 1.15;
    } else {
        pricePerBag *= 1.10;
    }

    console.log(`The total price of bags is: ${(pricePerBag * bagsQty).toFixed(2)} lv.`);

}

addBag(["63.80",
"23",
"3",
"1"])


