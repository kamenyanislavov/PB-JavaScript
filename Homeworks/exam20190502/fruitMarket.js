function fruitMarket(input) {

    let strawberriesPrice = Number(input[0]);
    let bananasQty = Number(input[1]);
    let orangesQty = Number(input[2]);
    let raspberriesQty = Number(input[3]);
    let strawberriesQty = Number(input[4]);

    let raspberriesPrice = strawberriesPrice * 0.50;
    let orangesPrice = raspberriesPrice * 0.60;
    let bananasPrice = raspberriesPrice * 0.20;
    let bill = 0;

    bill =
        strawberriesPrice * strawberriesQty +
        orangesPrice * orangesQty +
        bananasPrice * bananasQty +
        raspberriesPrice * raspberriesQty;

    console.log(bill.toFixed(2));

}

fruitMarket(["48", "10", "3.3", "6.5", "1.7"])