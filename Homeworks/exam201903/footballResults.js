function footballResults(input) {

    let result1 = input[0];
    let result2 = input[1];
    let result3 = input[2];
    let wins = 0;
    let loses = 0;
    let drawn = 0;

    if (Number(result1[0]) > Number(result1[2])) {
        wins = 1;
    } else if (Number(result1[0]) < Number(result1[2])) {
        loses = 1;
    } else if (Number(result1[0]) == Number(result1[2])) {
        drawn = 1;
    }

    if (Number(result2[0]) > Number(result2[2])) {
        wins = wins + 1;
    } else if (Number(result2[0]) < Number(result2[2])) {
        loses = loses + 1;
    } else if (Number(result2[0]) == Number(result2[2])) {
        drawn = drawn + 1;
    }

    if (Number(result3[0]) > Number(result3[2])) {
        wins = wins + 1;
    } else if (Number(result3[0]) < Number(result3[2])) {
        loses = loses + 1;
    } else if (Number(result3[0]) == Number(result3[2])) {
        drawn = drawn + 1;
    }
    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${loses} games.`);
    console.log(`Drawn games: ${drawn}`);

}

footballResults(["4:2", "0:3", "1:0"])