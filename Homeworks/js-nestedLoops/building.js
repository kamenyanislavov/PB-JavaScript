function building(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);


    for (let i = floors; i >= 1; i--) {

        let rows = '';
        for (let j = 0; j < rooms; j++) {

            if (i === Number(input[0])) {
                rows += `L${i}${j} `;
            } else if (i % 2 === 0) {
                rows += `O${i}${j} `;
            } else {
                rows += `A${i}${j} `;
            }
        }
        console.log(rows);
    }
}

building(["6", "4"])
