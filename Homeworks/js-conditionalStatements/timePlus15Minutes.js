function timePlus15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    minutes += 15;

    if (minutes > 59) {
        hour += 1; 
        if (hour > 23) {
            hour = hour - 24;
        }
        minutes = minutes - 60;
    }
    if (minutes < 10) {
    console.log(`${hour}:0${minutes}`);
    } else {
        console.log(`${hour}:${minutes}`);
    }
}

timePlus15Minutes(["12", "49"])