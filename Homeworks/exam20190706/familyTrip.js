function familyTrip(input) {

    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let extraCostPercent = Number(input[3]);

    let totalCost = 0;

    if (nights > 7) {
        totalCost = nights * pricePerNight * 0.95 + budget * extraCostPercent / 100;
    } else {
        totalCost = nights * pricePerNight + budget * extraCostPercent / 100;
    }

    if (budget >= totalCost) {
        console.log(`Ivanovi will be left with ${(budget - totalCost).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(totalCost - budget).toFixed(2)} leva needed.`);
    }

}

familyTrip(["800.50",
    "8",
    "100",
    "2"])
