function minNumber(input) {

    let i = 0;
    let currentInput = input[i];
    let minNumber = Number.POSITIVE_INFINITY;

    while (currentInput !== "Stop") {

        let num = Number(currentInput);
        if (num < minNumber) {
            minNumber = num;
        }
        i++
        currentInput = input[i];
    }
    console.log(minNumber);
}