function movieTickets(input) {

    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);

    let symb1 = "";
    let symb2 = "";
    let symb3 = "";
    let symb4 = "";
    let sum = 0;

    for (let i = a1; i <= (a2 - 1); i++) {

        symb1 = String.fromCharCode(i);

        for (let j = 1; j <= (n - 1); j++) {

            symb2 = j;

            for (let l = 1; l <= (n / 2 - 1); l++) {

                symb3 = l;
                symb4 = symb1.charCodeAt();
                sum = symb2 + symb3 + symb4

                if (symb4 % 2 !== 0 && sum % 2 !== 0) {
                    console.log(`${symb1}-${symb2}${symb3}${symb4}`);
                }
            }
        }
    }

}

movieTickets(["86",
    "88",
    "4"])
