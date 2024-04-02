function divisionWithoutRemainder(input) {

    let nums = Number(input[0]);

    let div2 = 0;
    let div3 = 0;
    let div4 = 0;

    for (let i = 1; i <= nums; i++) {
        let current = Number(input[i]);

        if (current % 2 === 0) {
            div2++;
        }
        if (current % 3 === 0) {
            div3++;
        }
        if (current % 4 === 0) {
            div4++;
        }

    }
    console.log(`${(div2 / nums * 100).toFixed(2)}%`);
    console.log(`${(div3 / nums * 100).toFixed(2)}%`);
    console.log(`${(div4 / nums * 100).toFixed(2)}%`);

}

divisionWithoutRemainder(["3",
    "3",
    "6",
    "9"])
