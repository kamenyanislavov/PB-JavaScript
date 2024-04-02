function oscarsWeek(input) {

    let movie = input[0];
    let hallType = input[1];
    let ticketsQty = Number(input[2]);

    let income = 0;

    switch (movie) {

        case "A Star Is Born":

        if (hallType === "normal") {
            income = ticketsQty * 7.50;
        } else if (hallType === "luxury") {
            income = ticketsQty * 10.50;
        } else {
            income = ticketsQty * 13.50;
        }
        break;

        case "Bohemian Rhapsody":

        if (hallType === "normal") {
            income = ticketsQty * 7.35;
        } else if (hallType === "luxury") {
            income = ticketsQty * 9.45;
        } else {
            income = ticketsQty * 12.75;
        }
        break;

        case "Green Book":

        if (hallType === "normal") {
            income = ticketsQty * 8.15;
        } else if (hallType === "luxury") {
            income = ticketsQty * 10.25;
        } else {
            income = ticketsQty * 13.25;
        }
        break;

        case "The Favourite":

        if (hallType === "normal") {
            income = ticketsQty * 8.75;
        } else if (hallType === "luxury") {
            income = ticketsQty * 11.55;
        } else {
            income = ticketsQty * 13.95;
        }
        break;
        
    }


    console.log(`${movie} -> ${income.toFixed(2)} lv.`);

}

oscarsWeek(["A Star Is Born", "luxury", "42"])
