function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let numbers = '';

    for (let i = startNum; i <= endNum; i++) {
        let currentNumber = i.toString();
        let evenSum = 0;
        let oddSum = 0;
        for (let j = 0; j < currentNumber.length; j++) {
            let digit = Number(currentNumber[j]);
            if (j % 2 === 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }
        if (evenSum === oddSum) {
            numbers += currentNumber + " ";
        }
    }
    console.log(numbers);
}

equalSumsEvenOddPosition(["100000",
    "100050"])
