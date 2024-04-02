function cake(input) {

    let cakeWidth = Number(input[0]);
    let cakeLenght = Number(input[1]);
    let piecesQty = cakeWidth * cakeLenght;

    let i = 2;
    let guests = input[i];

    while (guests !== "STOP") {

        guests = Number(input[i]);
        piecesQty -= guests;

        if (piecesQty <= 0) {
            console.log(`No more cake left! You need ${Math.abs(piecesQty)} pieces more.`);
            break;
        }

        i++
        guests = input[i];
    }

    if (guests === "STOP") {
        console.log(`${piecesQty} pieces are left.`);
    }

}

cake

    // (["10",
    //     "2",
    //     "2",
    //     "4",
    //     "6",
    //     "STOP"])


(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
