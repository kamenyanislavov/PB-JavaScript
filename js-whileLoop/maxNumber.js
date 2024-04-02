function maxNumber(input) {

    let i = 0;
    let currentInput = input[i];
    let maxNumber = Number.NEGATIVE_INFINITY;

    while (currentInput !== "Stop") {

        let num = Number(currentInput);
        if (num > maxNumber) {
            maxNumber = num;
        }
        i++
        currentInput = input[i];
    }
    console.log(maxNumber);
}

maxNumber(["100", "99", "80", "70", "Stop"])
