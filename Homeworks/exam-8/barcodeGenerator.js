function barcodeGenerator(input) {

    let firstNumber = input[0];
    let secondNumber = input[1];

    let s1 = Number(firstNumber[0]);
    let s2 = Number(firstNumber[1]);
    let s3 = Number(firstNumber[2]);
    let s4 = Number(firstNumber[3]);
    let e1 = Number(secondNumber[0]);
    let e2 = Number(secondNumber[1]);
    let e3 = Number(secondNumber[2]);
    let e4 = Number(secondNumber[3]);


    let result = '';

    for (let i = firstNumber; i <= secondNumber; i++) {

        let currentNumber = i;
        let curNumStr = currentNumber.toString();
        let n1 = Number(curNumStr[0]);
        let n2 = Number(curNumStr[1]);
        let n3 = Number(curNumStr[2]);
        let n4 = Number(curNumStr[3]);

        if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0 || n4 % 2 === 0) {
            continue;
        } else if (n1 < s1 || n2 < s2 || n3 < s3 || n4 < s4) {
            continue;
        } else if (n1 > e1 || n2 > e2 || n3 > e3 || n4 > e4) {
            continue;
        } else {
            result += `${curNumStr} `
        }
    }

    console.log(result);
}

barcodeGenerator(["2345", "6789"])
