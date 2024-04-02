function suitcasesLoad(input) {

    let loadingVolume = Number(input.shift());

    let suitcasesVolume = 0;
    let suitcasesCount = 0;

    let i = 1;
    let command = input.shift();
    i++;

    while (command !== "End") {
        let currentSuitcaseV = Number(command);
        suitcasesCount++;

        if (suitcasesCount % 3 === 0) {
            currentSuitcaseV *= 1.10;
        }

        if ((suitcasesVolume + currentSuitcaseV) <= loadingVolume) {
            suitcasesVolume += currentSuitcaseV;
        } else {
            console.log(`No more space!`);
            suitcasesCount -= 1;
            break;
        }


        command = input.shift();
        i++;
    }

    if (command === "End") {
        console.log(`Congratulations! All suitcases are loaded!`);
    }
    console.log(`Statistic: ${suitcasesCount} suitcases loaded.`);
}

suitcasesLoad(["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"])

