function rentCarPriceAndType(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let carType = '';
    let carClass = '';
    let carPrice = 0;

    if (budget > 500) {
        carClass = "Luxury class";
        carType = "Jeep";
        carPrice = budget * 0.90;
    } else if (budget <= 100) {
        carClass = "Economy class";
        switch (season) {
            case "Summer":
                carType = "Cabrio";
                carPrice = budget * 0.35;
                break;

            case "Winter":
                carType = "Jeep";
                carPrice = budget * 0.65;
                break;
        }
    } else {
        carClass = "Compact class";
        switch (season) {
            case "Summer":
                carType = "Cabrio";
                carPrice = budget * 0.45;
                break;
            case "Winter":
                carType = "Jeep";
                carPrice = budget * 0.80;
                break;
        }
    }
    console.log(carClass);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);
}

rentCarPriceAndType(["450", "Summer"])
