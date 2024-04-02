function timeOfArrival(input) {
    let hourOfExam = Number(input[0]);
    let minuteOfExam = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minuteOfArrival = Number(input[3]);
    let timeExamInMinutes = hourOfExam * 60 + minuteOfExam;
    let timeArrivalInMinutes = hourOfArrival * 60 + minuteOfArrival;
    let minutesLate = timeArrivalInMinutes - timeExamInMinutes;
    let minutesEarly = timeExamInMinutes - timeArrivalInMinutes;

    if (minutesEarly > 30) {
        console.log("Early");
    } else if (minutesEarly >= 0 && minutesEarly <= 30) {
        console.log("On time");
    } else {
        console.log("Late");
    }

    if (minutesEarly > 0 && minutesEarly < 60) {
        console.log(`${minutesEarly} minutes before the start`);
    } else if (minutesEarly > 59) {
        if (minutesEarly % 60 < 10) {
            console.log(`${Math.floor(minutesEarly / 60)}:0${minutesEarly % 60} hours before the start`);
        } else {
            console.log(`${Math.floor(minutesEarly / 60)}:${minutesEarly % 60} hours before the start`);
        }
    } else if (minutesLate >= 60) {
        if (minutesLate % 60 < 10) {
            console.log(`${Math.floor(minutesLate / 60)}:0${minutesLate % 60} hours after the start`);
        } else {
            console.log(`${Math.floor(minutesLate / 60)}:${minutesLate % 60} hours after the start`);
        }
    } else if (minutesLate > 0 && minutesLate < 60) {
        console.log(`${minutesLate} minutes after the start`);
    }
}
timeOfArrival(["11", "00", "12", "30"])








