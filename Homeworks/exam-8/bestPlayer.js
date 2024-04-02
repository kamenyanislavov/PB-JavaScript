function bestPlayer(input) {

    i = 0;
    let playerName = input[i];
    i++
    let goals = Number(input[i]);
    i++
    let mostGoals = 0;
    let bestPlayer = '';

    while (playerName !== 'END') {

        if (goals > mostGoals) {
            mostGoals = goals;
            bestPlayer = playerName;
        }

        if (goals >= 10) {
            break;
        }

        playerName = input[i];
        i++
        goals = Number(input[i]);
        i++

    }

    console.log(`${bestPlayer} is the best player!`);

    if (mostGoals >= 3) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostGoals} goals.`);
    }

}

bestPlayer(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"])



