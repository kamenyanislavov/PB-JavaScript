function nameGame(input) {

    let i = 0;
    let playerName = input[i];
    i++;
    let points = 0;
    let pointsMax = -1;
    let winner = "";

    while (playerName !== "Stop") {

        points = 0;

        for (let l = 0; l < playerName.length; l++) {

            let ascii = playerName.charCodeAt(l);
            let num = Number(input[i]);

            if (num === ascii) {
                points += 10;
            } else {
                points += 2;
            }

            if (points >= pointsMax) {
                pointsMax = points;
                winner = playerName;
            }
            i++;
        }

        playerName = input[i];
        i++;
    }

    console.log(`The winner is ${winner} with ${pointsMax} points!`);

}

nameGame(["Pesho",
"124",
"34",
"111",
"97",
"99",
"Gosho",
"98",
"124",
"88",
"76",
"18",
"Stop"])

