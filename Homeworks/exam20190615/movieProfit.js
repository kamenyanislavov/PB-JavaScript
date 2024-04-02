function movieProfit(input) {

    let movieName = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let price = Number(input[3]); // of one ticket
    let perCent = Number(input[4]); // percent from the income for the cinema owner

    let income = 0;
    let profit = 0;

    income = days * tickets * price;
    profit = income - (income * perCent / 100);

    console.log(`The profit from the movie ${movieName} is ${profit.toFixed(2)} lv.`);

}

movieProfit(["The Programmer",
    "20",
    "500",
    "7.50",
    "7"])
