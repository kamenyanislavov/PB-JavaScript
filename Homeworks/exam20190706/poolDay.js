function poolDay(input) {

    let visitors = Number(input[0]);
    let entryFee = Number(input[1]);
    let sunBedPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let sunBedNQty = Math.ceil(visitors * 0.75);
    let umbrellaQty = Math.ceil(visitors / 2);
    let totalCost = 0;

    totalCost = visitors * entryFee + sunBedNQty * sunBedPrice + umbrellaQty * umbrellaPrice;

    console.log(`${totalCost.toFixed(2)} lv.`);

}

poolDay(["21",
    "5.50",
    "4.40",
    "6.20"])
