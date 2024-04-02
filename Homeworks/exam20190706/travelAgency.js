function travelAgency(input) {

    let cityName = input[0];
    let packetType = input[1];
    let isDiscount = input[2];
    let days = Number(input[3]);

    let price = 0;

    if (cityName !== "Bansko" && cityName !== "Borovets" && cityName !== "Varna" && cityName !== "Burgas") {
        console.log("Invalid input!");
    } else {

        if (days > 7) {
            days -= 1;
        }

        if (cityName === "Bansko" || cityName === "Borovets") {

            switch (packetType) {
                case "withEquipment":

                    if (isDiscount === "yes") {
                        price = days * 100 * 0.90;
                    } else {
                        price = days * 100;
                    }
                    if (days < 1) {
                        console.log("Days must be positive number!");
                    } else {
                        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
                    }
                    break;

                case "noEquipment":

                    if (isDiscount === "yes") {
                        price = days * 80 * 0.95;
                    } else {
                        price = days * 80;
                    }
                    if (days < 1) {
                        console.log("Days must be positive number!");
                    } else {
                        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
                    }
                    break;
                default: console.log("Invalid input!"); break;
            }
        }
        if (cityName === "Varna" || cityName === "Burgas") {
            switch (packetType) {
                case "withBreakfast":

                    if (isDiscount === "yes") {
                        price = days * 130 * 0.88;
                    } else {
                        price = days * 130;
                    }
                    if (days < 1) {
                        console.log("Days must be positive number!");
                    } else {
                        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
                    }
                    break;

                case "noBreakfast":

                    if (isDiscount === "yes") {
                        price = days * 100 * 0.93;
                    } else {
                        price = days * 100;
                    }
                    if (days < 1) {
                        console.log("Days must be positive number!");
                    } else {
                        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
                    }
                    break;
                default: console.log("Invalid input!"); break;
            }
        }
    }

}

travelAgency(["Bansko",
    "noBreakfast",
    "yes",
    "10"])
