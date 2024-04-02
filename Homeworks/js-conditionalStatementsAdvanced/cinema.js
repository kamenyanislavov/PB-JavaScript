function incomeFromTickets(input) {
    let movieType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let places = rows * cols;
    let income = 0;

    if (movieType === "Premiere") {
        income = places * 12.00;
    } else if (movieType === "Normal") {
        income = places * 7.50;
    } else if (movieType === "Discount") {
        income = places * 5.00;
    }
    console.log(`${income.toFixed(2)} leva`);
}

incomeFromTickets(["Premiere", "10", "12"])
