function aluminumJoinery(input) {

    let joineryQty = Number(input[0]);
    let joineryType = input[1];
    let deliveryOption = input[2];

    let totalBill = 0;
    let price = 0;

    if (joineryQty < 10) {
        return console.log('Invalid order');
    }

    if (joineryType === '90X130') {
        price = 110;
        if (joineryQty > 60) {
            price *= 0.92;
        } else if (joineryQty > 30) {
            price *= 0.95;
        }
    } else if (joineryType === '100X150') {
        price = 140;
        if (joineryQty > 80) {
            price *= 0.90;
        } else if (joineryQty > 40) {
            price *= 0.94;
        }
    } else if (joineryType === '130X180') {
        price = 190;
        if (joineryQty > 50) {
            price *= 0.88;
        } else if (joineryQty > 20) {
            price *= 0.93;
        }
    } else if (joineryType === '200X300') {
        price = 250;
        if (joineryQty > 50) {
            price *= 0.86;
        } else if (joineryQty > 25) {
            price *= 0.91;
        }
    }

    if (deliveryOption === 'With delivery') {
        totalBill = joineryQty * price + 60;
    } else {
        totalBill = joineryQty * price;
    }

    if (joineryQty > 99) {
        totalBill *= 0.96;
    }

    console.log(`${totalBill.toFixed(2)} BGN`);

}

aluminumJoinery(["9",
    "100X150",
    "With delivery"])

