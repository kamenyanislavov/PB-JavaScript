function easterDecoration(input) {

    let customers = Number(input[0]);
    let totalbill = 0;

    for (let i = 1; i < input.length; i++) {
        bill = 0;
        count = 0;
        let product = input[i];

        while (product != "Finish") {
            if (product === "basket") {
                bill += 1.50;
            } else if (product === "wreath") {
                bill += 3.80;
            } else if (product === "chocolate bunny") {
                bill += 7;
            }

            count++;
            i++;
            product = input[i];
        }

        if (count % 2 === 0) {
            bill *= 0.80;
        }
        console.log(`You purchased ${count} items for ${bill.toFixed(2)} leva.`);
        totalbill += bill;
    }
    console.log(`Average bill per client is: ${(totalbill / customers).toFixed(2)} leva.`);
}

easterDecoration(["2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"])
