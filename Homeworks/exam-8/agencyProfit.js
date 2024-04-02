function agencyProfit(input) {

    let avioCompany = input[0];
    let adultTicketsNumber = Number(input[1]);
    let kidTicketsNumber = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let serviceFee = Number(input[4]);

    let profit = 0;

    profit = (adultTicketsNumber * adultTicketPrice) + (kidTicketsNumber * adultTicketPrice * 0.30) +
        (adultTicketsNumber + kidTicketsNumber) * serviceFee;

    profit *= 0.20;

    console.log(`The profit of your agency from ${avioCompany} tickets is ${profit.toFixed(2)} lv.`);

}

agencyProfit(["Ryanair",
    "60",
    "23",
    "158.96",
    "39.12"])