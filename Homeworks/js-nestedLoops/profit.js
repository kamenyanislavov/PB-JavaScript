function profit(input) {

    let oneLevCoins = Number(input[0]);
    let twoLevCoins = Number(input[1]);
    let fiveLevNotes = Number(input[2]);
    let sum = Number(input[3]);

    for (let i = 0; i <= oneLevCoins; i++) {

        for (let j = 0; j <= twoLevCoins; j++) {

            for (let k = 0; k <= fiveLevNotes; k++) {

                if (((i * 1) + (j * 2) + (k * 5)) !== sum) {
                    continue;
                }
                console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);

            }

        }
    }



}

profit(["5", "3", "1", "7"])