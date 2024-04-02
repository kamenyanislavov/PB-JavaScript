function coffeeMachine(input) {

    let baverage = input[0];
    let sugarLevel = input[1];
    let baverageQty = Number(input[2]);

    let endPrice = 0;

    switch (baverage) {

        case "Espresso":
            switch (sugarLevel) {
                case "Without": endPrice = baverageQty * 0.90 * 0.65; break;
                case "Normal": endPrice = baverageQty * 1.00; break;
                case "Extra": endPrice = baverageQty * 1.20; break;
            }
            if (baverageQty >= 5) {
                endPrice *= 0.75
            }
            break;

        case "Cappuccino":
            switch (sugarLevel) {
                case "Without": endPrice = baverageQty * 1.00 * 0.65; break;
                case "Normal": endPrice = baverageQty * 1.20; break;
                case "Extra": endPrice = baverageQty * 1.60; break;
            }
            break;

        case "Tea":
            switch (sugarLevel) {
                case "Without": endPrice = baverageQty * 0.50 * 0.65; break;
                case "Normal": endPrice = baverageQty * 0.60; break;
                case "Extra": endPrice = baverageQty * 0.70; break;
            }
            break;
    }

    if (endPrice > 15) {
        endPrice *= 0.80;
    }


    console.log(`You bought ${baverageQty} cups of ${baverage} for ${endPrice.toFixed(2)} lv.`);

}

coffeeMachine(["Espresso",
    "Without",
    "10"])
