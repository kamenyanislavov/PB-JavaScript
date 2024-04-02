function fuelBill(input) {
let fuelType = input[0];
let fuelQty = input[1];
let discountCard = input[2];
let dieselPrice = 2.33;
let gasolinePrice = 2.22;
let gasPrice = 0.93;

if (fuelType === "Diesel") {
    if (discountCard === "Yes") {
        price = dieselPrice - 0.12;
    } else {price = dieselPrice;
    }
} else if (fuelType === "Gas") {
    if (discountCard === "Yes") {
        price = gasPrice - 0.08;
    } else {
        price = gasPrice;
    }
} else if (fuelType === "Gasoline") {
    if (discountCard === "Yes") {
        price = gasolinePrice - 0.18;
    } else {
        price = gasolinePrice;
    }
}

let initialBill = price * fuelQty;

if (fuelQty > 25) {
    console.log(`${(initialBill * 0.90).toFixed(2)} lv.`);
} else if (fuelQty < 20) {
    console.log(`${initialBill.toFixed(2)} lv.`);
} else {
    console.log(`${(initialBill * 0.92).toFixed(2)} lv.`);
}

}

fuelBill(["Gas", 30, "Yes"])