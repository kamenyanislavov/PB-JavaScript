function grandpaStavri(input) {

    let days = Number(input[0])
    let littersRakia = 0;
    let degrees = 0;

    let totalQty = 0;
    let totalDegrees = 0;
    let averageDegrees = 0

    for (i = 1; i < input.length; i++) {
        littersRakia = Number(input[i]);
        totalQty += littersRakia;
        i++;
        degrees = Number(input[i]);
        totalDegrees += (littersRakia * degrees);

    }

    averageDegrees = (totalDegrees / totalQty);

    console.log(`Liter: ${totalQty.toFixed(2)}`);
    console.log(`Degrees: ${(averageDegrees).toFixed(2)}`);

    if (averageDegrees < 38) {
        console.log("Not good, you should baking!");
    } else if (averageDegrees >= 38 && averageDegrees <= 42) {
        console.log("Super!");
    } else {
        console.log("Dilution with distilled water!");
    }

}

grandpaStavri(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"])
