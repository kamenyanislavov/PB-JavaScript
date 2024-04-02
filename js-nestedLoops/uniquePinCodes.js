function uniquePin(input) {

let upLimitDigit1 = Number(input[0]);
let upLimitDigit2 = Number(input[1]);
let upLimitDigit3 = Number(input[2]);

for (let first = 1; first <= upLimitDigit1; first++) {

    if (first % 2 !== 0) {
        continue;
    }
    for (let second = 2; second <= upLimitDigit2; second++) {
        
        if (second > 2 && second % 2 === 0) {
            continue;
        }
        if (second > 7) {
            break;
        }

        for (let third = 1; third <= upLimitDigit3; third++) {

            if (third % 2 !== 0) {
                continue;
            }

            console.log(`${first} ${second} ${third}`);
        }
    }
}

}

uniquePin(["8", "2", "8"])