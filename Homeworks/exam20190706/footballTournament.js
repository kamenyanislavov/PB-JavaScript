function footballTournament(input) {

    let footballClub = input[0];
    let games = Number(input[1]);
    let points = 0;
    let wins = 0;
    let loses = 0;
    let draws = 0;

    for (let i = 2; i <= input.length; i++) {

        let result = input[i];

        switch (result) {
            case "W": wins++; points += 3; break;
            case "D": draws++; points += 1; break;
            case "L": loses++; break;
        }
    }

    if (games === 0) {
        console.log(`${footballClub} hasn't played any games during this season.`);
    } else {
        console.log(`${footballClub} has won ${points} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${wins}`);
        console.log(`## D: ${draws}`);
        console.log(`## L: ${loses}`);
        console.log(`Win rate: ${(wins / games * 100).toFixed(2)}%`);
    }

}

footballTournament(["Liverpool",
    "10",
    "W",
    "D",
    "D",
    "W",
    "L",
    "W",
    "D",
    "D",
    "W",
    "W"])
