function flowerPrice(input) {
    let chrisantemumQty = Number(input[0]);
    let roseQty = Number(input[1]);
    let tulipQty = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let flowerQty = chrisantemumQty + roseQty + tulipQty;
    let bill = 0;

    switch (season) {
        case "Spring":
            if (holiday === "Y") {
                if (tulipQty > 7) {
                    bill = (chrisantemumQty * 2.00 + roseQty * 4.10 + tulipQty * 2.50) * 1.15 * 0.95;
                } else {
                    bill = (chrisantemumQty * 2.00 + roseQty * 4.10 + tulipQty * 2.50) * 1.15;
                }
            } else {
                if (tulipQty > 7) {
                    bill = (chrisantemumQty * 2.00 + roseQty * 4.10 + tulipQty * 2.50) * 0.95;
                } else {
                    bill = (chrisantemumQty * 2.00 + roseQty * 4.10 + tulipQty * 2.50);
                }
            }
            break;

        case "Summer":
            if (holiday === "Y") {
                bill = (chrisantemumQty * 2.00 + roseQty * 4.10 + tulipQty * 2.50) * 1.15;
            } else {
                bill = (chrisantemumQty * 2.00 + roseQty * 4.10 + tulipQty * 2.50);
            }
            break;

        case "Autumn":
            if (holiday === "Y") {
                bill = (chrisantemumQty * 3.75 + roseQty * 4.50 + tulipQty * 4.15) * 1.15;
            } else {
                bill = (chrisantemumQty * 3.75 + roseQty * 4.50 + tulipQty * 4.15);
            }
            break;

        case "Winter":
            if (holiday === "Y") {
                if (roseQty >= 10) {
                    bill = (chrisantemumQty * 3.75 + roseQty * 4.50 + tulipQty * 4.15) * 1.15 * 0.90;
                } else {
                    bill = (chrisantemumQty * 3.75 + roseQty * 4.50 + tulipQty * 4.15) * 1.15;
                }
            } else {
                if (roseQty >= 10) {
                    bill = (chrisantemumQty * 3.75 + roseQty * 4.50 + tulipQty * 4.15) * 0.90;
                } else {
                    bill = (chrisantemumQty * 3.75 + roseQty * 4.50 + tulipQty * 4.15);
                }
            }
            break;
    }

    if (flowerQty > 20) {
        bill = bill * 0.80 + 2.00;
    } else {
        bill = bill + 2.00;
    }
    console.log(bill.toFixed(2));
    
}

flowerPrice([2, 4, 8, "Spring", "Y"])