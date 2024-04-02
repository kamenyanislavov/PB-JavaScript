function clock() {

    for (let i = 0; i <= 23; i++) {
        let hour = 0;
        hour += i;

        for (let k = 0; k <= 59; k++) {
            let minutes = 0;
            minutes += k;
            console.log(`${hour} : ${minutes}`);
        }
    }
}

clock()