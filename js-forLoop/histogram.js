function histogram(input) {
    let numberCount = Number(input[0]);

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;

    for (let i = 1; i < input.length; i++) {
        let curNum = Number(input[i]);
        if (curNum < 200) {
            group1++;
        } else if (curNum < 400) {
            group2++;
        } else if (curNum < 600) {
            group3++;
        } else if (curNum < 800) {
            group4++
        } else {
            group5++
        }
    }
    let percent1 = group1 / numberCount * 100;
    let percent2 = group2 / numberCount * 100;
    let percent3 = group3 / numberCount * 100;
    let percent4 = group4 / numberCount * 100;
    let percent5 = group5 / numberCount * 100;

    console.log(`${percent1.toFixed(2)}%`);
    console.log(`${percent2.toFixed(2)}%`);
    console.log(`${percent3.toFixed(2)}%`);
    console.log(`${percent4.toFixed(2)}%`);
    console.log(`${percent5.toFixed(2)}%`);
}

histogram(["3",
    "1",
    "2",
    "999"])
