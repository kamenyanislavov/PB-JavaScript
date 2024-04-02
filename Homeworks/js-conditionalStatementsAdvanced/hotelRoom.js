function hotelRoomPrice(input) {
    let month = input[0];
    let numberOfNights = Number(input[1]);
    let priceStudio = 0;
    let priceApartment = 0;

    if (month === "May" || month === "October") {
        priceApartment = numberOfNights * 65.00;
        priceStudio = numberOfNights * 50.00;
        if (numberOfNights > 14) {
            priceStudio = priceStudio * 0.70;
            priceApartment = priceApartment * 0.90;
        } else if (numberOfNights > 7) {
            priceStudio = priceStudio * 0.95;
        }
    } else if (month === "June" || month === "September") {
        priceApartment = numberOfNights * 68.70;
        priceStudio = numberOfNights * 75.20;
        if (numberOfNights > 14) {
            priceStudio = priceStudio * 0.80;
            priceApartment = priceApartment * 0.90;
        }
    } else if (month === "July" || month === "August") {
        priceApartment = numberOfNights * 77.00;
        priceStudio = numberOfNights * 76.00;
        if (numberOfNights > 14) {
            priceApartment = priceApartment * 0.90;
        }
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}

hotelRoomPrice(["August",
    "20"])

