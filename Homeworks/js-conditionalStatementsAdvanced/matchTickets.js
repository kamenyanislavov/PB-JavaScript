function moneyForTickets(input) {
    let budget = input[0];
    let category = input[1];
    let fansNumber = input[2];
    let tranportPrice = 0;


    if (fansNumber < 5) {
        tranportPrice = budget * 0.75;
    } else if (fansNumber < 10) {
        tranportPrice = budget * 0.60;
    } else if (fansNumber < 25) {
        tranportPrice = budget * 0.50;
    } else if (fansNumber < 50) {
        tranportPrice = budget * 0.40;
    } else {
        tranportPrice = budget * 0.25;
    }

    switch (category) {

        case "VIP":
            if (budget >= (tranportPrice + fansNumber * 499.99)) {
                console.log(`Yes! You have ${(budget - tranportPrice - fansNumber * 499.99).toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${(tranportPrice + fansNumber * 499.99 - budget).toFixed(2)} leva.`);
            }
            break;

        case "Normal":
            if (budget >= (tranportPrice + fansNumber * 249.99)) {
                console.log(`Yes! You have ${(budget - tranportPrice - fansNumber * 249.99).toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${(tranportPrice + fansNumber * 249.99 - budget).toFixed(2)} leva.`);
            }
            break;
    }
}

moneyForTickets([999.95, "Normal", 8])
