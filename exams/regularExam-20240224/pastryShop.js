function pastryShop(input) {

    let product = input[0];
    let orderQty = Number(input[1]); // number of sweats ordered
    let date = Number(input[2]); // December date when order has been placed

    let bill = 0;

    if (date <= 15) {
        switch (product) {
            case "Cake": bill = orderQty * 24; break;
            case "Souffle": bill = orderQty * 6.66; break;
            case "Baklava": bill = orderQty * 12.60; break;
        }
    } else {
        switch (product) {
            case "Cake": bill = orderQty * 28.70; break;
            case "Souffle": bill = orderQty * 9.80; break;
            case "Baklava": bill = orderQty * 16.98; break;
        }
    }

    if (date <= 22) {
        if (bill > 100 && bill <= 200) {
            bill *= 0.85;
        } else if (bill > 200) {
            bill *= 0.75;
        }
    }
    if (date <= 15) {
        bill *= 0.90;
    }
    console.log(bill.toFixed(2));
}

pastryShop(["Cake",
    "10",
    "15"])
