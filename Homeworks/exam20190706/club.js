function club(input) {

    let goalProfit = Number(input[0]);

    let income = 0;
    let i = 1;
    let command = input[i];
    i++;
    let price = 0;

    while (command !== "Party!") {

        let coctailName = command;
        let coctailQty = Number(input[i]);
        i++;

        price = coctailName.length * coctailQty;

        if (price % 2 !== 0) {
            price *= 0.75;
        }
        income += price;
        if (income >= goalProfit) {
            break;
        }

            command = input[i];
        i++;
    }

    if (income < goalProfit) {
        console.log(`We need ${(goalProfit - income).toFixed(2)} leva more.`);
    } else {
        console.log("Target acquired.");
    }
    console.log(`Club income - ${income.toFixed(2)} leva.`);

}

club(["100",
    "Sidecar",
    "7",
    "Mojito",
    "5",
    "White Russian",
    "10"])

