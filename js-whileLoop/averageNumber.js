function averageNumber(input) {

    let numbers = Number(input[0]);
    let sum = 0;
    let average = 0;

    for (let i = 1; i < input.length; i++) {

        let n = Number(input[i]);
        sum += n;
        average = (sum / numbers).toFixed(2);
    }
    console.log(average);
}

averageNumber

// (["1", "5"])

    (["4",
        "3",
        "2",
        "4",
        "2"])


// (["2",
// "6",
// "4"])

// (["3",
// "82",
// "43",
// "22"])

// (["4",
// "95",
// "23",
// "76",
// "23"])
