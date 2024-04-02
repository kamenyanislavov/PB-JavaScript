function excursionExpenses(input) {

    let people = Number(input[0]);
    let nights = Number(input[1]);
    let transportCards = Number(input[2]);
    let museumTickets = Number(input[3]);

    let excursionPrice = 0;
    let nightsPrice = 0;
    let transportPrice = 0;
    let museumPrice = 0;

    nightsPrice = people * nights * 20;
    transportPrice = people * transportCards * 1.60;
    museumPrice = people * museumTickets * 6;

    excursionPrice = (nightsPrice + transportPrice + museumPrice) * 1.25;

    console.log(excursionPrice.toFixed(2));

}

excursionExpenses
    (["20",
        "14",
        "30",
        "6"])
