function clock2() {

    for (let i = 0; i <= 23; i++) {
        let hour = 0;
        hour += i;

        for (let k = 0; k <= 59; k++) {
            let minutes = 0;
            minutes += k;
            for (let j = 0; j <= 59; j++) {
                let seconds = 0;
                seconds += j;
                console.log(`${hour} : ${minutes} : ${seconds}`);
            }
        }
    }
}

clock2()