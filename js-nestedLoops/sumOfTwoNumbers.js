function sumOfTwo(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let magicNumber = Number(input[2]);
    let count = 0;
    let sum = 0;


    for (let i = num1; i <= num2; i++) {

        for (let j = num1; j <= num2; j++) {

            sum = i + j;
            count++;

            if (sum === magicNumber) {
                console.log(`Combination N:${count} (${i} + ${j} = ${magicNumber})`);
                break;
            }
        }
        if (sum === magicNumber) {
            break;
        }
    }
    if (sum !== magicNumber) {
        console.log(`${count} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwo(["1", "10", "5"])
