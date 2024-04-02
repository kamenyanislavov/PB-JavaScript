function percentClimbers(input) {
    let groupsNumber = Number(input[0]);
    let groupMusala = 0;
    let groupMontblanc = 0;
    let groupKilimandjaro = 0;
    let groupK2 = 0;
    let groupEverest = 0;

    let climbersNumber = 0;

    for (let i = 1; i <= groupsNumber; i++) {
        let groupSize = Number(input[i]);

        if (groupSize <= 5) {
            groupMusala += groupSize;
            climbersNumber += groupSize;
        } else if (groupSize <= 12) {
            groupMontblanc += groupSize;
            climbersNumber += groupSize;
        } else if (groupSize <= 25) {
            groupKilimandjaro += groupSize;
            climbersNumber += groupSize
        } else if (groupSize <= 40) {
            groupK2 += groupSize;
            climbersNumber += groupSize
        } else {
            groupEverest += groupSize;
            climbersNumber += groupSize;
        }
    }
    let percentMusala = groupMusala / climbersNumber * 100;
    let percentMontblanc = groupMontblanc / climbersNumber * 100;
    let percentKilimandjaro = groupKilimandjaro / climbersNumber * 100;
    let percentK2 = groupK2 / climbersNumber * 100;
    let percentEverest = groupEverest / climbersNumber * 100;

    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMontblanc.toFixed(2)}%`);
    console.log(`${percentKilimandjaro.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);
}

percentClimbers(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
