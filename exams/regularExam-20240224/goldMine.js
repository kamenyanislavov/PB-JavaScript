function goldMine(input) {

    let locations = Number(input[0]) // number of locations to dog gold

    let totalYield = 0;
    let day = 1;

    for (let i = 1; i < input.length; i++) {

        let averageYield = Number(input[i]);
        let days = Number(input[i + 1]);
        totalYield = 0;
        let yield = 0;

        while (day <= days) {
            yield = Number(input[i + 2]);

            totalYield += yield

            day++;
            i++;


        }
        day = 1;
        if ((totalYield / days) >= averageYield) {
            console.log(`Good job! Average gold per day: ${(totalYield / days).toFixed(2)}.`);
        } else {
            console.log(`You need ${(averageYield - (totalYield / days)).toFixed(2)} gold.`);
        }
        totalYield = 0;
        i++;
    }


}

goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])
