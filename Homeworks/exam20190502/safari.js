function safari(input) {

    let budget = Number(input[0]);
    let fuel = Number(input[1]);
    let day = input[2];

    let expenses = 0;

    expenses = fuel * 2.10 + 100;

    if (day === "Sunday") {
        expenses *= 0.80;
    } else {
        expenses *= 0.90;
    }

    if (budget >= expenses) {
        console.log(`Safari time! Money left: ${(budget - expenses).toFixed(2)} lv. `);
    } else {
        console.log(`Not enough money! Money needed: ${(expenses - budget).toFixed(2)} lv.`);
    }

}

safari(["120",
    "30",
    "Saturday"])
