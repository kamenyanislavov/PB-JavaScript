function reportSystem(input) {
    let expectedSum = Number(input[0]);

    let i = 1;
    let price = input[i];
    let cashSum = 0;
    let cardSum = 0;
    let cashCount = 0;
    let cardCount = 0;

    while (price !== "End") {
        price = Number(input[i]);

        if (i % 2 !== 0) {
            if (price <= 100) {
                cashSum += price;
                cashCount++;
                console.log('Product sold!');
            } else {
                console.log('Error in transaction!');
            }
        } else if (i % 2 === 0) {
            if (price > 10) {
                cardSum += price;
                cardCount++;
                console.log('Product sold!');
            } else {
                console.log('Error in transaction!');
            }
        }

        if ((cardSum + cashSum) >= expectedSum) {
            console.log(`Average CS: ${(cashSum / cashCount).toFixed(2)}`);
            console.log(`Average CC: ${(cardSum / cardCount).toFixed(2)}`);
            return;
        }

        i++;
        price = input[i];
    }

    if (price === "End") {
        console.log('Failed to collect required money for charity.');
    }

}

reportSystem

    (["500",
        "120",
        "8",
        "63",
        "256",
        "78",
        "317"])


// (["600",
// "86",
// "150",
// "98",
// "227",
// "End"])
