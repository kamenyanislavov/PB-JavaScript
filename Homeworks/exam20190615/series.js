function series(input) {

    let budget = Number(input[0]);
    let bill = 0;

    for (let series = 2; series < input.length; series += 2) {

        let name = input[series];
        let price = Number(input[series + 1]);

        switch (name) {
            case "Thrones": price *= 0.50; break;
            case "Lucifer": price *= 0.60; break;
            case "Protector": price *= 0.70; break;
            case "TotalDrama": price *= 0.80; break;
            case "Area": price *= 0.90; break;
        }

        bill += price;
        
    }

    if (budget >= bill) {
        console.log(`You bought all the series and left with ${(budget - bill).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(bill - budget).toFixed(2)} lv. more to buy the series!`);
    }
}

series(["10",
    "3",
    "Thrones",
    "5",
    "Riverdale",
    "5",
    "Gotham",
    "2"])
