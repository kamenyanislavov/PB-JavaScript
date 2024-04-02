function finalCompetition(input) {

    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let moneyWon = 0;

    if (season === "summer") {
        switch (place) {
            case "Bulgaria": moneyWon = (dancers * points) * 0.95; break;
            case "Abroad": moneyWon = ((dancers * points) * 1.5) * 0.90; break;
        }
    } else {
        switch (place) {
            case "Bulgaria": moneyWon = (dancers * points) * 0.92; break;
            case "Abroad": moneyWon = ((dancers * points) * 1.5) * 0.85; break;
        }
    }

    console.log(`Charity - ${(moneyWon * 0.75).toFixed(2)}`);
    console.log(`Money per dancer - ${(moneyWon * 0.25 / dancers).toFixed(2)}`);
}

finalCompetition(["1",
    "89.5",
    "summer",
    "Abroad"])
