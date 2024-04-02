function filmPremiere(input) {

    let movieName = input[0];
    let vaucher = input[1];
    let tickets = Number(input[2]); // number of tickets sold
    let bill = 0;

    if (movieName === "John Wick") {
        switch (vaucher) {
            case "Drink": bill = tickets * 12; break;
            case "Popcorn": bill = tickets * 15; break;
            case "Menu": bill = tickets * 19; break;
        }
    } else if (movieName === "Star Wars") {
        switch (vaucher) {
            case "Drink": bill = tickets * 18; break;
            case "Popcorn": bill = tickets * 25; break;
            case "Menu": bill = tickets * 30; break;
        }
        if (tickets >= 4) {
            bill *= 0.70;
        }
    } else if (movieName === "Jumanji") {
        switch (vaucher) {
            case "Drink": bill = tickets * 9; break;
            case "Popcorn": bill = tickets * 11; break;
            case "Menu": bill = tickets * 14; break;
        }
        if (tickets === 2) {
            bill *= 0.85;
        }
    }
    console.log(`Your bill is ${bill.toFixed(2)} leva.`);
}

filmPremiere(["John Wick",
    "Drink",
    "6"])
