function paswordBreaker(input) {

    let controlNum = Number(input[0]);
    let output = '';
    let counter = 0;
    let password = '';

    for (let a = 1; a <= 9; a++) {

        for (let b = 1; b <= 9; b++) {

            for (let c = 1; c <= 9; c++) {

                for (let d = 1; d <= 9; d++) {

                    if (((a * b) + (c * d)) !== controlNum) {
                        continue;
                    }
                    if (a >= b) {
                        continue;
                    }
                    if (c <= d) {
                        continue;
                    }
                    output += `${a}${b}${c}${d} `
                    counter++;
                    if (counter === 4) {
                        password = `${a}${b}${c}${d}`
                    }
                }
            }
        }
    }
    console.log(output);
    if (counter > 4) {
        console.log(`Password: ${password}`);
    } else if (counter < 4 || output === '') {
        console.log("No!");
    }
}

paswordBreaker(["11"])