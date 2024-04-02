function basketballTournament(input) {



    let wins = 0;
    let loses = 0;
    let matches = 0;

    let i = 0;
    let tournamentName = input[0];
    i++;
    let gamesInTournament = Number(input[i]);
    i++;
    let game = 1;

    while (tournamentName !== "End of tournaments") {

        for (let k = 1; k <= gamesInTournament; k++) {
            let pointsTeam1 = Number(input[i]);
            let pointsTeam2 = Number(input[i+1]);

            if (pointsTeam1 > pointsTeam2) {
                wins++;
                console.log(`Game ${game} of tournament ${tournamentName}: win with ${pointsTeam1 - pointsTeam2} points.`);
            }
            if (pointsTeam2 > pointsTeam1) {
                loses++;
                console.log(`Game ${game} of tournament ${tournamentName}: lost with ${pointsTeam2 - pointsTeam1} points.`);
            }
            game++;
            i += 2;
        }
        tournamentName = input[i];
        gamesInTournament = Number(input[i + 1]);
        game = 1;
        i += 2;

    }
    matches = wins + loses;
    console.log(`${(wins / matches * 100).toFixed(2)}% matches win`);
    console.log(`${(loses / matches * 100).toFixed(2)}% matches lost`);
}

basketballTournament

    (["Dunkers",
        "2",
        "75",
        "65",
        "56",
        "73",
        "Fire Girls",
        "3",
        "67",
        "34",
        "83",
        "98",
        "66",
        "45",
        "End of tournaments"])


// (["Ballers",
// "3",
// "87",
// "63",
// "56",
// "65",
// "75",
// "64",
// "Sharks",
// "4",
// "64",
// "76",
// "65",
// "86",
// "68",
// "99",
// "45",
// "78",
// "End of tournaments"])
