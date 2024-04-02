function ticketsForSnooker(input) {
    let round = input[0];
    let ticketType = input[1];
    let ticketsQty = parseFloat(input[2]);
    let picWithTrophy = input[3];

    let finalPrice = 0;

    switch (round) {

        case "Quarter final":
            switch (ticketType) {

                case "Standard":
                    finalPrice = ticketsQty * 55.50;
                    break;

                case "Premium":
                    finalPrice = ticketsQty * 105.20;
                    break;

                case "VIP":
                    finalPrice = ticketsQty * 118.90;
                    break;
            }

            break;

        case "Semi final":
            switch (ticketType) {

                case "Standard":
                    finalPrice = ticketsQty * 75.88;
                    break;

                case "Premium":
                    finalPrice = ticketsQty * 125.22;
                    break;

                case "VIP":
                    finalPrice = ticketsQty * 300.40;
                    break;
            }
            break;

        case "Final":
            switch (ticketType) {

                case "Standard":
                    finalPrice = ticketsQty * 110.10;
                    break;

                case "Premium":
                    finalPrice = ticketsQty * 160.66;
                    break;

                case "VIP":
                    finalPrice = ticketsQty * 400.00;
                    break;
            }
            break;

    }

    if (picWithTrophy === "Y") {
        if (finalPrice > 4000) {
            finalPrice = finalPrice * 0.75;
        } else if (finalPrice > 2500) {
            finalPrice = finalPrice * 0.90 + ticketsQty * 40;
        } else {
            finalPrice = finalPrice + ticketsQty * 40;
        }
    } else {
        if (finalPrice > 4000) {
            finalPrice = finalPrice * 0.75;
        } else if (finalPrice > 2500) {
            finalPrice = finalPrice * 0.90;
        } else {
            finalPrice = finalPrice;
        }
    }

    console.log(finalPrice.toFixed(2));
}

ticketsForSnooker(["Semi final", "VIP", "9", "Y"])