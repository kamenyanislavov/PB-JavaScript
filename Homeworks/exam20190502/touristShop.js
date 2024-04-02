function touristShop(input) {

    let budget = Number(input[0]);

    let i = 1;
    let product = input[i];
    i++;
    let price = 0;
    let bill = 0;
    let counter = 0;

    while (product !== "Stop") {
        price = Number(input[i]);
        counter++;

        if (counter > 0 && counter % 3 === 0) {
            price = price * 0.5;
        }

        if ((bill + price) > budget) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${((bill + price) - budget).toFixed(2)} leva!`);
            break;
        }
        bill += price;


        i++;
        product = input[i];
        i++;
    }

    if (product === "Stop") {
        console.log(`You bought ${counter} products for ${bill.toFixed(2)} leva.`);
    }

}

touristShop(["153.20",
    "Backpack",
    "25.20",
    "Shoes",
    "54",
    "Sunglasses",
    "30",
    "Stop"])
