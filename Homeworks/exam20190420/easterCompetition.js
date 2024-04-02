function easterCompetition(input) {

    let maxPoints = -1;
    let bakerMaxPoints = '';

    for (let i = 1; i < input.length; i++) {
        totalPoints = 0;
        baker = input[i];
        i++;

        while (input[i] != "Stop") {

            totalPoints += Number(input[i]);
            i++;
        }
        console.log(`${baker} has ${totalPoints} points.`);
        if (totalPoints > maxPoints) {
            maxPoints = totalPoints;
            bakerMaxPoints = baker;
            console.log(`${baker} is the new number 1!`);
        }
    }
    console.log(`${bakerMaxPoints} won competition with ${maxPoints} points!`);
    console.log();
}

easterCompetition(["2",
    "Chef Angelov",
    "10",
    "10",
    "9",
    "10",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"])
