function cinemaTickets(input) {

    let i = 0;
    let movieName = input[i];
    i++;

    let studentTicketsQty = 0;
    let standardTicketsQty = 0;
    let kidTicketsQty = 0;
    let totalTickets = 0;

    while (movieName !== "Finish") {

        let capacityOfCinema = Number(input[i]);
        i++;
        let currentTicket = input[i];
        i++;
        let movieTickets = 0;
        while (currentTicket !== "End") {

            if (currentTicket === "student") {
                studentTicketsQty++;
            } else if (currentTicket === "standard") {
                standardTicketsQty++;
            } else if (currentTicket === "kid") {
                kidTicketsQty++;
            }

            movieTickets++;

            if (movieTickets === capacityOfCinema) {
                break;
            } else {
                currentTicket = input[i];
                i++;
            }
        }
        totalTickets = studentTicketsQty + standardTicketsQty + kidTicketsQty;
        console.log(`${movieName} - ${(movieTickets / capacityOfCinema * 100).toFixed(2)}% full.`);
        
        movieName = input[i];
        i++;
    }

    console.log(`Total tickets: ${studentTicketsQty + standardTicketsQty + kidTicketsQty}`);
    console.log(`${(studentTicketsQty / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTicketsQty / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicketsQty / totalTickets * 100).toFixed(2)}% kids tickets.`);

}

cinemaTickets(["The Matrix",
    "9",
    "student",
    "student",
    "student",
    "standard",
    "standard",
    "standard",
    "kid",
    "kid",
    "kid",
    "End",
    "The Green Mile",
    "9",
    "student",
    "student",
    "student",
    "standard",
    "standard",
    "standard",
    "kid",
    "kid",
    "kid",
    "End",
    "Amadeus",
    "9",
    "student",
    "student",
    "student",
    "standard",
    "standard",
    "standard",
    "kid",
    "kid",
    "kid",
    "Finish"])
