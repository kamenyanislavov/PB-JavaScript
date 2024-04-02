function easterEggsBattle(input) {

    let player1Eggs = Number(input[0]);
    let player2Eggs = Number(input[1]);

    let i = 2;
    let winner = input[i];
    i++;

    while (winner !== "End") {

        if (winner === "one") {
            player2Eggs -= 1;
        } else {
            player1Eggs -= 1;
        }

        if (player1Eggs === 0) {
            console.log(`Player one is out of eggs. Player two has ${player2Eggs} eggs left.`);
            break;
        } else if (player2Eggs === 0) {
            console.log(`Player two is out of eggs. Player one has ${player1Eggs} eggs left.`);
            break;
        }

        winner = input[i];
        i++;
    }

    if (winner === "End") {
    console.log(`Player one has ${player1Eggs} eggs left.`);
    console.log(`Player two has ${player2Eggs} eggs left.`);
    }

}

easterEggsBattle(["5", "4", "one", "two", "one", "two", "two", "End"])