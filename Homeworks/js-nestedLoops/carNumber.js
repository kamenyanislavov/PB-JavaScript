function carNumber(input) {

    let intervalStart = Number(input[0]);
    let intervalEnd = Number(input[1]);

    let specialNumbers = '';

    for (let n1 = intervalStart; n1 <= intervalEnd; n1++) {

        for (let n2 = intervalStart; n2 <= intervalEnd; n2++) {

            for (let n3 = intervalStart; n3 <= intervalEnd; n3++) {

                for (let n4 = intervalStart; n4 <= intervalEnd; n4++) {

                    if (n1 % 2 === 0 && n4 % 2 === 0) {
                        continue;
                    } else if (n1 % 2 !== 0 && n4 % 2 !== 0) {
                        continue;
                    }
                    if (n1 <= n4) {
                        continue;
                    }
                    if ((n2 + n3) % 2 !== 0) {
                        continue;
                    }

                    specialNumbers += n1.toString() + n2.toString() + n3.toString() + n4.toString() + " ";

                }
            }
        }
    }

    console.log(specialNumbers);
}

carNumber(["3", "5"])