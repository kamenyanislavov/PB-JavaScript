function easterTrip(input) {

    let vacationPlace = input[0];
    let periodDates = input[1];
    let nights = Number(input[2]);

    let excursionPrice = 0;

    switch (periodDates) {

        case "21-23":
            if (vacationPlace === "France") {
                excursionPrice = nights * 30;
            } else if (vacationPlace === "Italy") {
                excursionPrice = nights * 28;
            } else if (vacationPlace === "Germany") {
                excursionPrice = nights * 32;
            }
            break;

        case "24-27":
            if (vacationPlace === "France") {
                excursionPrice = nights * 35;
            } else if (vacationPlace === "Italy") {
                excursionPrice = nights * 32;
            } else if (vacationPlace === "Germany") {
                excursionPrice = nights * 37;
            }
            break;

        case "28-31":
            if (vacationPlace === "France") {
                excursionPrice = nights * 40;
            } else if (vacationPlace === "Italy") {
                excursionPrice = nights * 39;
            } else if (vacationPlace === "Germany") {
                excursionPrice = nights * 43;
            }
            break;

    }

    console.log(`Easter trip to ${vacationPlace} : ${excursionPrice.toFixed(2)} leva.`);

}

easterTrip(["Germany", "24-27", "5"])
