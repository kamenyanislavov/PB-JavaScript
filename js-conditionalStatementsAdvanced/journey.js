function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let place = '';
    let holidayType = '';

    if (budget <= 100) {
        place = "Bulgaria";
        switch (season) {
            case "summer":
                holidayType = "Camp";
                price = budget * 0.3;
                break;
            case "winter":
                holidayType = "Hotel";
                price = budget * 0.7;
                break;
        }

    } else if (budget <= 1000) {
        place = "Balkans";
        switch (season) {
            case "summer":
                holidayType = "Camp";
                price = budget * 0.4
                break;
            case "winter":
                holidayType = "Hotel";
                price = budget * 0.8;
                break;
        }
    } else {
        place = "Europe";
        switch (season) {
            case "summer":
            case "winter":
                holidayType = "Hotel";
                price = budget * 0.9;
                break;
        }
    }
    console.log(`Somewhere in ${place}`);
    console.log(`${holidayType} - ${price.toFixed(2)}`);
}

journey(["312", "summer"])