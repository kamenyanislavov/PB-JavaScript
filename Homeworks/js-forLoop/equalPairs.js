function equalPairs(input) {
    let numberOfPairs = Number(input[0]);


    let sum1 = 0;
    let sum2 = 0;
    let diff = 0;
    let maxDiff = 0;

    for (let i = 1; i < input.length; i += 2) {
        let num1 = Number(input[i]);
        let num2 = Number(input[i + 1]);
        sum1 = (num1 + num2);
        
        let num3 = Number(input[i + 2]);
        let num4 = Number(input[i + 3]);
        sum2 = (num3 + num4);
        
        diff = Math.abs(sum1 - sum2);


        if (diff > maxDiff) {
            maxDiff = diff;
        }

    }
    if (maxDiff === 0) {
        console.log(`Yes, value=${sum1}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

equalPairs(["7", "34", "-33", "52", "12", "-32", "32", "23", "41", "7", "25", "34", "23", "124", "21"])