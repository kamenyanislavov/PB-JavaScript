function passwordGenerator(input) {

    let n = Number(input[0]);
    let l = Number(input[1]);

    let output = '';

    for (let a = 1; a <= n; a++) {

        for (let b = 1; b <= n; b++) {

            for (let c = 1; c <= l; c++) {

                for (let d = 1; d <= l; d++) {

                    for (let e = 1; e <= n; e++) {

                        if (e <= a || e <= b) {
                            continue;
                        }
                        output += `${a}${b}${String.fromCodePoint(c + 96)}${String.fromCodePoint(d + 96)}${e} `
                    }
                }
            }
        }
    }
    console.log(output);
}

passwordGenerator(["2", "4"])