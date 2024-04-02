function christmasGifts(input) {

    let adults = 0;
    let kids = 0;
    let moneyForToys = 0;
    let moneyForPullovers = 0;
    let i = 0;
    let command = input[i];

    while (command !== "Christmas") {

        let age = Number(command);

        if (age < 17) {
            kids++;
            moneyForToys += 5;
        } else {
            adults++;
            moneyForPullovers += 15;
        }



        i++;
        command = input[i];
    }

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForPullovers}`);





}

christmasGifts(["16",
    "20",
    "46",
    "12",
    "8",
    "20",
    "49",
    "Christmas"])
