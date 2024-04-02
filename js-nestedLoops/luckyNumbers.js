function luckyNumbers(input) {

    let num = Number(input[0]);

    let result1 = 0;
    let result2 = 0;
    let luckyNumbers = '';


    for (let n1 = 1; n1 <= 9; n1++) {

        for (let n2 = 1; n2 <= 9; n2++) {

            for (let n3 = 1; n3 <= 9; n3++) {

                for (let n4 = 1; n4 <= 9; n4++) {

                    if ((n1 + n2) === (n3 + n4)) {
                        if (num % (n1 + n2) === 0) {
                            luckyNumbers += n1.toString() + n2.toString() + n3.toString() + n4.toString() + " ";
                        }
                    }

                }
            }
        }
    }

    console.log(luckyNumbers);

}

luckyNumbers(["7"])