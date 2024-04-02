function intervals(input) {
    let moves = Number(input[0]);

    let totalPoints = 0;
    let group0to9 = 0;
    let group10to19 = 0;
    let group20to29 = 0;
    let group30to39 = 0;
    let group40to50 = 0;
    let groupInvalidNumbers = 0;

    for (let i = 1; i < input.length; i++) {
        let points = Number(input[i]);

        if (points >= 0 && points <= 9) {
            totalPoints += points * 0.2;
            group0to9 += 1;
        } else if (points >= 10 && points <= 19) {
            totalPoints += points * 0.3;
            group10to19 += 1;
        } else if (points >= 20 && points <= 29) {
            totalPoints += points * 0.4;
            group20to29 += 1;
        } else if (points >= 30 && points <= 39) {
            totalPoints += 50;
            group30to39 += 1;
        } else if (points >= 40 && points <= 50) {
            totalPoints += 100;
            group40to50 += 1;
        } else if (points < 0) {
            totalPoints = totalPoints / 2;
            groupInvalidNumbers += 1;
        } else if (points > 50) {
            totalPoints = totalPoints / 2;
            groupInvalidNumbers += 1;
        }

    }
    console.log(totalPoints.toFixed(2));
    console.log(`From 0 to 9: ${(group0to9 / moves * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(group10to19 / moves * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(group20to29 / moves * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(group30to39 / moves * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(group40to50 / moves * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(groupInvalidNumbers / moves * 100).toFixed(2)}%`);
}
intervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])