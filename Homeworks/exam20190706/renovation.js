function renovation(input) {

    let wallHight = Number(input[0]);
    let wallWidth = Number(input[1]);
    let noPaintPercent = Number(input[2]);

    let area = Math.ceil((4 * wallHight * wallWidth) * (1 - noPaintPercent / 100));

    let i = 3;
    let command = input[i];
    let paintQty = 0;

    while (command !== "Tired!") {

        paintQty = Number(command);

        area -= paintQty;

        if (area <= 0) {
            break;
        }

        i++;
        command = input[i];
    }

    if (area < 0) {
        console.log(`All walls are painted and you have ${Math.abs(area)} l paint left!`);
    } else if (area === 0) {
        console.log("All walls are painted! Great job, Pesho!");
    } else {
        console.log(`${area} quadratic m left.`);
    }
}

renovation(["2",
    "3",
    "25",
    "6",
    "7",
    "8"])

