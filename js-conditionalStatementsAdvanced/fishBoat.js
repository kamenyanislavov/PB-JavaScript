
function moneyForBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermanNumber = Number(input[2]);
    let bill = 0;

    switch (season) {
        case "Spring":
            if (fishermanNumber <= 6) {
                bill = 3000 * 0.90;
            } else if (fishermanNumber >= 7 && fishermanNumber <= 11) {
                bill = 3000 * 0.85;
            } else if (fishermanNumber >= 12) {
                bill = 3000 * 0.75;
            } else {
                bill = 3000;
            }
            break;
            i
        case "Summer":

        case "Autumn":
            if (fishermanNumber <= 6) {
                bill = 4200 * 0.90;
            } else if (fishermanNumber >= 7 && fishermanNumber <= 11) {
                bill = 4200 * 0.85;
            } else if (fishermanNumber >= 12) {
                bill = 4200 * 0.75;
            } else {
                bill = 4200;
            }
            break;

        case "Winter":
            if (fishermanNumber <= 6) {
                bill = 2600 * 0.90;
            } else if (fishermanNumber >= 7 && fishermanNumber <= 11) {
                bill = 2600 * 0.85;
            } else if (fishermanNumber >= 12) {
                bill = 2600 * 0.75;
            } else {
                bill = 2600;
            }
            break;
    }

    if (fishermanNumber % 2 === 0 && season !== "Autumn") {
        bill = bill * 0.95;
    } else {
        bill = bill;
    }

    if (budget >= bill) {
        console.log(`Yes! You have ${(budget - bill).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(bill - budget).toFixed(2)} leva.`);
    }
}

moneyForBoat(["2000", "Winter", "13"])


