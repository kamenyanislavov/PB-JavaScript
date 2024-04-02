function possibleDates(input) {

    let men = Number(input[0]);
    let women = Number(input[1]);
    let tableQty = Number(input[2]);

    let dates = '';
    let count = 0;

    for (let man = 1; man <= men; man++) {

        for (let woman = 1; woman <= women; woman++) {

            if (count >= tableQty) {
                break;
            }

            dates += `(${man} <-> ${woman}) `;
            count++;

        }
    }
    console.log(dates);
}

possibleDates(["2", "2", "3"])