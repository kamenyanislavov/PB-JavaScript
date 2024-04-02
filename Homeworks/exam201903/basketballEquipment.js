function basketballEquipment(input) {
    let annualFee = Number(input[0]);

    let sneekersPrice = annualFee * 0.60;
    let clothesPrice = sneekersPrice * 0.80;
    let ballPrice = clothesPrice * 0.25;
    let accesorriesPrice = ballPrice * 0.20;
    let totalPrice = annualFee + sneekersPrice + clothesPrice + ballPrice + accesorriesPrice;

    console.log(totalPrice.toFixed(2));

}

basketballEquipment(["320"])