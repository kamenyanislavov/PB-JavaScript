function movieStar(input) {

    let budget = Number(input[0]);

    let i = 1;
    let actor = input[i];
    
    let payment = 0;

    while (actor !== "ACTION") {
        i++;
        payment = Number(input[i]);

        if (String(actor).length > 15) {
            payment = budget *0.20;
            i--;
        }
        budget -= payment;

        if (budget < 0) {
            break;
        }
        i++;
        actor = input[i];
        

    }


    if (budget >= 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
    }
}

movieStar(["1000",
"Ben Affleck",
"800",
"Zahari Baharov",
"3000",
"ACTION"])
