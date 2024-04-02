function coins(input) {
    let change = Number(input[0]);
    let changeInCents = Math.round(change * 100);
    let coins = 0;

    while (changeInCents > 0) {

        if (changeInCents >= 200) {
            changeInCents -= 200;
            coins++
        } else if (changeInCents >= 100) {
            changeInCents -= 100;
            coins++
        } else if (changeInCents >= 50) {
            changeInCents -= 50;
            coins++
        } else if (changeInCents >= 20) {
            changeInCents -= 20;
            coins++
        } else if (changeInCents >= 10) {
            changeInCents -= 10;
            coins++
        } else if (changeInCents >= 5) {
            changeInCents -= 5;
            coins++
        } else if (changeInCents >= 2) {
            changeInCents -= 2;
            coins++
        } else if (changeInCents >= 1) {
            changeInCents -= 1;
            coins++
        }
    }
    console.log(coins);
}

coins(["0.04"])