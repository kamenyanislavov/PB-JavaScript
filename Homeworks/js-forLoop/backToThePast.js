function backToPast(input) {
    let inheritance = Number(input[0]);
    let targetYear = Number(input[1]);

    let moneyNeeded = 0;

    for (let i = 1800; i <= targetYear; i++) {
        if (i % 2 === 0) {
            moneyNeeded = moneyNeeded + 12000;
        } else {
            moneyNeeded = moneyNeeded + 12000 + 50 * (18 + i - 1800);
        }
    }
    if (inheritance >= moneyNeeded) {
        console.log(`Yes! He will live a carefree life and will have ${(inheritance - moneyNeeded).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(moneyNeeded - inheritance).toFixed(2)} dollars to survive.`);
    }
}

backToPast(["50000", "1802"])