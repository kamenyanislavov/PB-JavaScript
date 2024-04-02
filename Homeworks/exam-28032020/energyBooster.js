function energyBooster(input) {

    let taste = input[0];
    let size = input[1]; // small = 2 pcs. & big = 5 pcs.
    let qty = Number(input[2]);

    let bill = 0;

    switch (taste) {
        case "Watermelon":
            switch (size) {
                case "small": bill = 56 * 2 * qty; break;
                case "big": bill = 28.70 * 5 * qty; break;
            }
            break;

        case "Mango":
            switch (size) {
                case "small": bill = 36.66 * 2 * qty; break;
                case "big": bill = 19.60 * 5 * qty; break;
            }
            break;

        case "Pineapple":
            switch (size) {
                case "small": bill = 42.10 * 2 * qty; break;
                case "big": bill = 24.80 * 5 * qty; break;
            }
            break;

        case "Raspberry":
            switch (size) {
                case "small": bill = 20 * 2 * qty; break;
                case "big": bill = 15.20 * 5 * qty; break;
            }
            break;
    }

    if (bill >= 400 && bill <= 1000) {
        bill = bill * 0.85;
    } else if (bill > 1000) {
        bill = bill * 0.50;
    }

    console.log(`${bill.toFixed(2)} lv.`);
}

energyBooster(["Watermelon",
    "big",
    "4"])
