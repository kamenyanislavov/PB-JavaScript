function tennisRanklist(input) {

    let tournaments = Number(input[0]);
    let startPoints = Number(input[1]);
    let pointsWon = 0;
    let wins = 0;

    for (let i = 2; i < input.length; i++) {

        let tournaments = input[i];

        switch (tournaments) {

            case "W":
                startPoints += 2000;
                pointsWon += 2000;
                wins++;
                break;

            case "F":
                startPoints += 1200;
                pointsWon += 1200;
                break;

            case "SF":
                startPoints += 720;
                pointsWon += 720;
                break;
        }
    }

    console.log(`Final points: ${startPoints}`);
    console.log(`Average points: ${Math.floor(pointsWon / tournaments)}`);
    console.log(`${(wins / tournaments * 100).toFixed(2)}%`);

}

tennisRanklist

    (["5",
        "1400",
        "F",
        "SF",
        "W",
        "W",
        "SF"])


// (["4",
// "750",
// "SF",
// "W",
// "SF",
// "W"])
