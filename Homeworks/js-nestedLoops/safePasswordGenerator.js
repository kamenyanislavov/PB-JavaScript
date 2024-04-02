function passwordGenerator(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let maxNrPswd = Number(input[2]); //maximum number of passwords allowed

    //password template is ABxyBA
    let passwordsCount = 0;
    let result = '';
    let a = '';
    let b = '';



    for (let j = 64; j <= 96; j++) {

        for (let i = 35; i <= 55; i++) {

            for (let p = 35; p <= 55; p++) {

                for (let m = 64; m <= 96; m++) {

                    for (let k = 1; k <= num1; k++) {
                        a = k;
                        for (let d = 1; d <= num2; d++) {
                            b = d;
                            if (passwordsCount >= maxNrPswd) {
                                break;
                            }

                            result += `${String.fromCodePoint(i)}${String.fromCodePoint(j)}${a}${b}${String.fromCodePoint(m)}${String.fromCodePoint(p)}|`;
                            passwordsCount++;
                            i++;
                            j++;
                            p++;
                            m++;
                            // if (a > (num1 - 1) && b > (num2 - 1)) {
                            //     break;
                            // }
                        }
                        // if (a > (num1 - 1) && b > (num2 - 1)) {
                        //     break;
                        // }
                    }
                    if (a > (num1 - 1) && b > (num2 - 1)) {
                        break;
                    }
                    if (m > 96) {
                        m = 64;
                    }
                }
                if (a > (num1 - 1) && b > (num2 - 1)) {
                    break;
                }
                if (p > 96) {
                    p = 64;
                }
            }
            if (a > (num1 - 1) && b > (num2 - 1)) {
                break;
            }
            if (i > 55) {
                i = 35;
            }
        }
        if (a > (num1 - 1) && b > (num2 - 1)) {
            break;
        }
        if (j > 96) {
            j = 64;
        }
    }

    console.log(result);

}

passwordGenerator(["20", "50", "10"])