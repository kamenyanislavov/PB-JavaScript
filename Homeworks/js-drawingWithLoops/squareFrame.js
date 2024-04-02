function squareFrame(input) {

    let base = Number(input[0]);

    let topRow = "+";

    for (let i = 0; i < base - 2; i++) {
        topRow += " -";
    }
    topRow += " +";
    console.log(topRow);

    for (let mid = 0; mid < base - 2; mid++) {
        let midRows = "|";

        for (j = 0; j < base - 2; j++) {
            midRows += " -"
        }
        midRows += " |";
        console.log(midRows);
    }

    let bottomRow = "+";

    for (let k = 0; k < base - 2; k++) {
        bottomRow += " -";
    }
    bottomRow += " +"
    console.log(bottomRow);

}

squareFrame(["10"])