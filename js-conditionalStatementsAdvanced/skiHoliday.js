function roomPrice(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];

    let price = 0;

    switch (roomType) {

        case "room for one person":
            price = (days - 1) * 18.00;
            break;

        case "apartment":
            if (days < 10) {
                price = ((days - 1) * 25.00) * 0.70;
            } else if (days <= 15) {
                price = ((days - 1) * 25.00) * 0.65;
            } else {
                price = ((days - 1) * 25.00) * 0.50;
            }
            break;

        case "president apartment":
            if (days < 10) {
                price = ((days - 1) * 35.00) * 0.90;
            } else if (days <= 15) {
                price = ((days - 1) * 35.00) * 0.85;
            } else {
                price = ((days - 1) * 35.00) * 0.80;
            }
            break;
    }

    if (rating === "positive") {
        price = price * 1.25;
    } else if (rating === "negative") {
        price = price * 0.90;
    }

    console.log(price.toFixed(2));
}

roomPrice(["2", "apartment", "positive"])



