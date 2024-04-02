function primePairs(input) {

    let firsrPairStart = Number(input[0]);
    let secondPairStart = Number(input[1]);
    let firstPairDiff = Number(input[2]);
    let secondPairDiff = Number(input[3]);

    for (let first = firsrPairStart; first <= (firsrPairStart + firstPairDiff); first++) {

        for (let second = secondPairStart; second <= (secondPairStart + secondPairDiff); second++) {

            if (first % 2 === 0 || first % 3 === 0 || first % 5 === 0 || first % 7 === 0) {
                continue;
            }
            if (second % 2 === 0 || second % 3 === 0 || second % 5 === 0 || second % 7 === 0) {
                continue;
            }

            console.log(`${first}${second} `);

        }
    }
}

primePairs(["10", "20", "5", "5"])