function avgNum(input) {

    let numbers = Number(input[0])

    let i = 1;
    let curNum = Number(input[i]);
    let sum = 0;

    while (i <= numbers) {

        sum += curNum;

        i++
        curNum = Number(input[i]);
    }

    console.log((sum / numbers).toFixed(2));

}

avgNum(["4",
    "3",
    "2",
    "4",
    "2"])