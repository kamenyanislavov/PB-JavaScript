function fishBill(input) {
    let mackerelPrice = input[0];
    let spratPrice = input[1];
    let bonitoQty = input[2];
    let safridQty = input[3];
    let musselsQty = input[4];

    let bonitoBill = bonitoQty * (mackerelPrice * 1.6);
    let safridBill = safridQty * (spratPrice * 1.8);
    let musselBill = musselsQty * 7.50;

    let totalBill = bonitoBill + safridBill + musselBill;

    console.log(totalBill.toFixed(2));
}

fishBill([6.90, 4.20, 1.5, 2.5, 1])