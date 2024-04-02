function paintingEggs(input) {

    let eggSize = input[0];
    let eggColour = input[1];
    let batchCount = Number(input[2]);

    let price = 0;
    let expenses = 0;
    let income = 0;

    if (eggSize === "Large") {
        switch (eggColour) {
            case "Red": price = 16; break;
            case "Green": price = 12; break;
            case "Yellow": price = 9; break;
        }

    } else if (eggSize === "Medium") {
        switch (eggColour) {
            case "Red": price = 13; break;
            case "Green": price = 9; break;
            case "Yellow": price = 7; break;
        }

    } else {
        switch (eggColour) {
            case "Red": price = 9; break;
            case "Green": price = 8; break;
            case "Yellow": price = 5; break;
        }
    }

    income = batchCount * price;
    expenses = income * 0.35;
    income -= expenses;

    console.log(`${(income).toFixed(2)} leva.`);

}

// function roundToTwo(num) {
//     return + (Math.round(num + "e+2") + "e-2");
// }

paintingEggs(["Large",
    "Red",
    "0.5"])
