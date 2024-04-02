function gameShop(input) {

    let gameQty = Number(input[0]);
    let count1 = 0; // number of Hearthstone
    let count2 = 0; // number of Fornite
    let count3 = 0; // number of Overwatch
    let count4 = 0; // number of other games

    for (let game = 1; game <= gameQty; game++) {

        gameName = input[game];

        switch (gameName) {
            case "Hearthstone": count1++; break;
            case "Fornite": count2++; break;
            case "Overwatch": count3++; break;
            default: count4++; break;
        }
    }

    console.log(`Hearthstone - ${(count1 / gameQty * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(count2 / gameQty * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(count3 / gameQty * 100).toFixed(2)}%`);
    console.log(`Others - ${(count4 / gameQty * 100).toFixed(2)}%`);
}

gameShop(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"]
)