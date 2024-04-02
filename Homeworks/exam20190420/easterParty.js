function easterParty(input) {

    let guestNumber = Number(input[0]);
    let pricePerGuest = Number(input[1]);
    let budget = Number(input[2]);

    let cakePrice = budget * 0.10;
    let expenses = 0;

    if (guestNumber >= 10 && guestNumber <= 15) {
        pricePerGuest = pricePerGuest * 0.85;
    } else if (guestNumber > 15 && guestNumber <= 20) {
        pricePerGuest = pricePerGuest * 0.80;
    } else if (guestNumber > 20) {
        pricePerGuest = pricePerGuest * 0.75;
    } else {
        pricePerGuest = pricePerGuest;
    }

    expenses = guestNumber * pricePerGuest + cakePrice

    if (budget >= expenses) {
        console.log(`It is party time! ${(budget - expenses).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(expenses - budget).toFixed(2)} leva needed.`);
    }

}

easterParty(["8", "25", "340"])
