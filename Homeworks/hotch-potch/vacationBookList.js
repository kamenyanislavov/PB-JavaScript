

function vacationBookList(input) {

    let currentBookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToRead = Number(input[2]);

    let hoursForCurrentBook = currentBookPages / pagesPerHour;
    let hoursPerDay = hoursForCurrentBook / daysToRead;

    console.log(hoursPerDay);
}

vacationBookList(["212 ", "20 ", "2 "])