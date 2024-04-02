function movieTickets(input) {

    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;

    let i = 0;
    let movie = input[i];
    i++;

    while (movie !== "Finish") {
        
        let freeSeats = Number(input[i]);
        i++;
        let currentTicket = input[i];
        i++;
        
        let seatsTaken = 0;

        while (currentTicket !== "End") {

            if (currentTicket === "student") {
                studentTickets++;
            } else if (currentTicket === "standard") {
                standardTickets++;
            } else if (currentTicket === "kid") {
                kidsTickets++;
            }

            seatsTaken++;

            if (seatsTaken === freeSeats) {
                break;
            } else {
                currentTicket = input[i];
                i++;
            }

        }

        totalTickets = studentTickets + standardTickets + kidsTickets;

        console.log(`${movie} - ${(seatsTaken / freeSeats * 100).toFixed(2)}% full.`);

        movie = input[i];
        i++;
    }

        console.log(`Total tickets: ${totalTickets}`);
        console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
        console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
        console.log(`${(kidsTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);


}

movieTickets
    // (["Taxi",
    //     "10",
    //     "standard",
    //     "kid",
    //     "student",
    //     "student",
    //     "standard",
    //     "standard",
    //     "End",
    //     "Scary Movie",
    //     "6",
    //     "student",
    //     "student",
    //     "student",
    //     "student",
    //     "student",
    //     "student",
    //     "Finish"])


    (["The Matrix",
"8",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
