function graduation(input) {

    let name = input[0];
    let i = 1;
    let yearRate = Number(input[i]);
    let sumRate = 0;
    let fail = 0;

    while (i <= 12) {
        if (yearRate < 4) {
            fail += 1;
        }
        if (fail > 1) {
            console.log(`${name} has been excluded at ${i-1} grade`);
            return;
        }
        sumRate += yearRate;
        i++
        yearRate = Number(input[i]);
    }
    console.log(`${name} graduated. Average grade: ${(sumRate / 12).toFixed(2)}`);
}

graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
