function mobileOperator(input) {

    let contractPeriod = input[0];
    let typeOfContract = input[1];
    let internet = input[2];
    let months = Number(input[3]);

    let bill = 0;


    if (contractPeriod === "one") {
        switch (typeOfContract) {
            case "Small":
                if (internet === "yes") {
                    bill = (9.98 + 5.50) * months;
                } else {
                    bill = 9.98 * months;
                } break;

            case "Middle":
                if (internet === "yes") {
                    bill = (18.99 + 4.35) * months;
                } else {
                    bill = 18.99 * months;
                } break;

            case "Large":
                if (internet === "yes") {
                    bill = (25.98 + 4.35) * months;
                } else {
                    bill = 25.98 * months;
                } break;

            case "ExtraLarge":
                if (internet === "yes") {
                    bill = (35.99 + 3.85) * months;
                } else {
                    bill = 35.99 * months;
                } break;
        }
    } else if (contractPeriod === "two") {
        switch (typeOfContract) {
            case "Small":
                if (internet === "yes") {
                    bill = (8.58 + 5.50) * months * 0.9625;
                } else {
                    bill = 8.58 * months * 0.9625;
                } break;

            case "Middle":
                if (internet === "yes") {
                    bill = (17.09 + 4.35) * months * 0.9625;
                } else {
                    bill = 17.09 * months * 0.9625;
                } break;

            case "Large":
                if (internet === "yes") {
                    bill = (23.59 + 4.35) * months * 0.9625;
                } else {
                    bill = 23.59 * months * 0.9625;
                } break;

            case "ExtraLarge":
                if (internet === "yes") {
                    bill = (31.79 + 3.85) * months * 0.9625;
                } else {
                    bill = 31.79 * months * 0.9625;
                } break;
        }
    }


    console.log(`${bill.toFixed(2)} lv.`);
}

mobileOperator(["two",
    "Large",
    "no",
    "10"])
