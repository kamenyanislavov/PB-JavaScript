function easterGuests(input) {

    let guestNumber = Number(input[0]);
    let budget = Number(input[1]);

    let easterBredQty = Math.ceil(guestNumber / 3);
    let eggQty = guestNumber * 2;
    let expenses = 0;

    expenses = easterBredQty * 4 + eggQty * 0.45;

    if (budget >= expenses) {
        console.log(`Lyubo bought ${easterBredQty} Easter bread and ${eggQty} eggs.`);
        console.log(`He has ${(budget - expenses).toFixed(2)} lv. left.`);
    } else {
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${(expenses - budget).toFixed(2)} lv. more.`);
    }
}

easterGuests(["10", "35"])
