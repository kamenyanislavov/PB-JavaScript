

function budgetForFlowers(input) {
    let flowerType = input[0];
    let flowerQty = Number(input[1]);
    let budget = Number(input[2]);
    let bill = 0;

    switch (flowerType) {
        case "Roses":
            if (flowerQty > 80) {
                bill = flowerQty * 5 * 0.9;
            } else {
                bill = flowerQty * 5;
            } break;
        case "Dahlias":
            if (flowerQty > 90) {
                bill = flowerQty * 3.80 * 0.85;
            } else {
                bill = flowerQty * 3.80;
            } break;
        case "Tulips":
            if (flowerQty > 80) {
                bill = flowerQty * 2.80 * 0.85;
            } else {
                bill = flowerQty * 2.80;
            } break;
        case "Narcissus":
            if (flowerQty < 120) {
                bill = flowerQty * 3.00 * 1.15;
            } else {
                bill = flowerQty * 3.00;
            } break;
        case "Gladiolus":
            if (flowerQty < 80) {
                bill = flowerQty * 2.50 * 1.20;
            } else {
                bill = flowerQty * 2.50;
            } break;
    }
    if (budget >= bill) {
        console.log(`Hey, you have a great garden with ${flowerQty} ${flowerType} and ${(budget - bill).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(bill - budget).toFixed(2)} leva more.`);
    }
}

budgetForFlowers(["Roses", "55", "250"])
