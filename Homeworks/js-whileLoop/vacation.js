function vacation(input) {

    let moneyNeeded = Number(input[0]);
    let availableMoney = Number(input[1]);

    let i = 2;
    let action = input[i];
    i++
    let money = Number(input[i]);

    let spending = 0;
    let saving = 0;
    let days = 0;
    let moneySaved = 0;

    while (availableMoney < moneyNeeded) {

        if (action === "spend") {
            days++
            spending += 1;
            availableMoney -= money;
        } else if (action === "save") {
            days++
            spending = 0;
            // saving += 1;
            availableMoney += money;
            // availableMoney = availableMoney + moneySaved;
        }
        if (spending > 4) {
            console.log(`You can't save the money.`);
            console.log(`${days}`);
            break;
        }

        if (availableMoney < 0) {
            availableMoney = 0;
        }

        i++
        action = input[i];
        i++
        money = Number(input[i]);

    }

    if (availableMoney >= moneyNeeded) {
        console.log(`You saved the money for ${days} days.`);
    }
}

vacation

    // (["2000",
    // "1000",
    // "spend",
    // "1200",
    // "save",
    // "2000"])




    // (["250",
    //     "150",
    //     "spend",
    //     "50",
    //     "spend",
    //     "50",
    //     "save",
    //     "100",
    //     "save",
    //     "100"])

    // (["110",
    //     "60",
    //     "spend",
    //     "10",
    //     "spend",
    //     "10",
    //     "spend",
    //     "10",
    //     "spend",
    //     "10",
    //     "spend",
    //     "10"])

    (["250",
        "150",
        "spend",
        "50",
        "spend",
        "50",
        "save",
        "100",
        "save",
        "100"])
