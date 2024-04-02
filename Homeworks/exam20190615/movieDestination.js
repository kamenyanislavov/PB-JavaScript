function movieDestination(input) {

    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);

    let cost = 0;

    if (season === "Summer") {
        switch (destination) {
            case "Dubai": cost = days * 40000 * 0.70; break;
            case "Sofia": cost = days * 12500 * 1.25; break;
            case "London": cost = days * 20250; break;
        }
    } else if (season === "Winter") {
        switch (destination) {
            case "Dubai": cost = days * 45000 * 0.70; break;
            case "Sofia": cost = days * 17000 * 1.25; break;
            case "London": cost = days * 24000; break;
        }
    }



    if (budget >= cost) {
        console.log(`The budget for the movie is enough! We have ${(budget - cost).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(cost - budget).toFixed(2)} leva more!`);
    }
}

movieDestination(["400000",
    "Sofia",
    "Winter",
    "20"])
