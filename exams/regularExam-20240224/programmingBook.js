function programmingBook(input) {

    let pricePerPage = Number(input[0]);  // price for printing a page
    let pricePerCover = Number(input[1]); // price for printing a cover
    let percentDiscount = Number(input[2]);
    let designPrice = Number(input[3]);
    let percentTeamPay = Number(input[4]); // percent of the price paid by the team

    let bookPrice = pricePerPage * 899 + pricePerCover * 2;
    let priceWithDiscount = (100 - percentDiscount) / 100;
    let totalPrice = (bookPrice * priceWithDiscount + designPrice);
    let moneyToPay = totalPrice - (totalPrice * percentTeamPay / 100);

    console.log(`Avtonom should pay ${moneyToPay.toFixed(2)} BGN.`);

}

programmingBook(["0.01",
    "1",
    "10",
    "20",
    "20"])
