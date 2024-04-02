function tennisPoints(input) {
    let competitionNumber = Number(input[0]);
    let initialPoints = Number(input[1]);

    let pointsWon = 0;
    let victories = 0;

    for (let i = 2; i < input.length; i++) {
        let currGame = input[i];

        if (currGame === "W") {
            pointsWon += 2000;
            victories++;
        } else if (currGame === "F") {
            pointsWon += 1200;
        } else if (currGame === "SF") {
            pointsWon += 720;
        }
    }
    let totalPoints = initialPoints + pointsWon;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(pointsWon / competitionNumber)}`);
    console.log(`${(victories / competitionNumber * 100).toFixed(2)}%`);

}

tennisPoints(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
