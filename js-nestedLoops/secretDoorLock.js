function secretDoodLock(input) {

    let upLimitHundreds = Number(input[0]);
    let upLimitTens = Number(input[1]);
    let upLimitUnits = Number(input[2]);

    for (let i = 1; i <= upLimitHundreds; i++) {

        if (i % 2 !== 0) {
            continue;
        }
        for (let j = 2; j <= upLimitTens; j++) {

            if (j > 7) {
                break;
            }
            if (j > 2 && j % 2 === 0) {
                continue;
            }
            for (let k = 1; k <= upLimitUnits; k++) {

                if (k % 2 !== 0) {
                    continue;
                }
                console.log(`${i} ${j} ${k}`);
            }
        }
    }

}

secretDoodLock(["3", "5", "5"])