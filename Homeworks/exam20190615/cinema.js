function cinema(input) {

    let capacity = Number(input[0]); // available places in the salon

    let i = 1;
    let command = input[1];

    let seatsTaken = 0;
    let income = 0;

    while (command !== "Movie time!") {
        let people = Number(command);

        seatsTaken += people;
        if (seatsTaken > capacity) {
            break;
        }
        income += people * 5;
        if (people % 3 === 0) {
            income -= 5;
        }

        i++;
        command = input[i];
    }
    if (command === "Movie time!" && seatsTaken <= capacity) {
        console.log(`There are ${capacity - seatsTaken} seats left in the cinema.`);
    } else if (seatsTaken > capacity) {
        console.log("The cinema is full.");
    }
    console.log(`Cinema income - ${income} lv.`);
}

cinema(["60",
    "10",
    "13",
    "3",
    "20",
    "15",
    "Movie time!"])
