function hairSalon(input) {

    let goalIncome = Number(input[0]);

    let i = 1;
    let service = input[i];
    i++;

    let income = 0;

    while (service !== "closed") {
        let typeOfService = input[i];

        if (income >= goalIncome) {
            break;
        }

        if (service === "haircut") {
            switch (typeOfService) {
                case "mens": income += 15; break;
                case "ladies": income += 20; break;
                case "kids": income += 10; break;
            }
        } else if (service === "color") {
            switch (typeOfService) {
                case "touch up": income += 20; break;
                case "full color": income += 30; break;
            }
        }


        i++;
        service = input[i];
        i++;
    }

    if (income >= goalIncome) {
        console.log("You have reached your target for the day!");
    } else {
        console.log(`Target not reached! You need ${goalIncome - income}lv. more.`);
    }
    console.log(`Earned money: ${income}lv.`);

}

hairSalon(["50",
    "color",
    "full color",
    "haircut",
    "ladies"])

