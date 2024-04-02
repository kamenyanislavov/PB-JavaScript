function savePassTest(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let passMax = Number(input[2]);

    let counter = 0;
    let result1 = '';
    let result2 = '';

    for (let a = 1; a <= n1; a++) {
        for (let j = 64; j <= 96; j++) {
            for (let i = 35; i <= 55; i++) {
                if (counter >= passMax) {
                    break;
                }
                result1 += `${String.fromCodePoint(i)}${String.fromCodePoint(j)}${a}|`
                counter++;
                
                if (a > n1) {
                    break;
                }
            }
        }
    }

    


    console.log(result1);
}

savePassTest(["2", "3", "10"])