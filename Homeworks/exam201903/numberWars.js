function numberWars(input) {

    let player1 = input[0];
    let player2 = input[1];


    let pointsPlayer1 = 0;
    let pointsPlayer2 = 0;

    let i = 2;
    let command = input[i];

    while (command !== "End of game") {
        let cardPlayer1 = Number(input[i]);
        i++;
        let cardPlayer2 = Number(input[i]);

        if (cardPlayer1 > cardPlayer2) {
            pointsPlayer1 = pointsPlayer1 + cardPlayer1 - cardPlayer2;
        } else if (cardPlayer1 < cardPlayer2) {
            pointsPlayer2 = pointsPlayer2 + cardPlayer2 - cardPlayer1;
        } else {
            i++;
            cardPlayer1 = Number(input[i]);
            i++;
            cardPlayer2 = Number(input[i]);
            console.log(`Number wars!`);
            if (cardPlayer1 > cardPlayer2) {
                console.log(`${player1} is winner with ${pointsPlayer1} points`);
                break;
            } else {
                console.log(`${player2} is winner with ${pointsPlayer2} points`);
                break;
            }
        }
        i++;
        command = input[i];
    }
    if (command === "End of game") {
        console.log(`${player1} has ${pointsPlayer1} points`);
        console.log(`${player2} has ${pointsPlayer2} points`);
    } else {
        if (pointsPlayer1 > pointsPlayer2) {
        }
    }
}

numberWars

(["Desi",
"Niki",
"7",
"5",
"3",
"4",
"3",
"3",
"5",
"3"])


// (["Elena",
// "Simeon",
// "6",
// "3",
// "2",
// "5",
// "8",
// "9",
// "End of game"])
