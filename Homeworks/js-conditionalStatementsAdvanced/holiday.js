function summerPlaceAndPrice(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let place = '';
    let destination = '';
    let price = 0;

    if (season === "Summer") {
        destination = "Alaska";
    } else {
        destination = "Morocco";
    }

    if (budget > 3000) {
        place = "Hotel";
        price = budget * 0.90;

    } else if (budget <= 1000) {
        place = "Camp";
        if (season === "Summer") {
            price = budget * 0.65;
        } else {
            price = budget * 0.45;
        }
    } else {
        place = "Hut";
        if (season === "Summer") {
            price = budget * 0.80;
        } else {
            price = budget * 0.60;
        }
    }

    console.log(`${destination} - ${place} - ${price.toFixed(2)}`);
}

summerPlaceAndPrice(["800", "Summer"])