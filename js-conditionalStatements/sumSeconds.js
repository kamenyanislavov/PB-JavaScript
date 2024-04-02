function sumSeconds(input) {
    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);

    let totalTimeSeconds = time1 + time2 + time3;
    let totalMinutes = Math.floor(totalTimeSeconds / 60);
    let secondsLeft = totalTimeSeconds % 60;

    if (secondsLeft < 10) {
        console.log(`${totalMinutes}:0${secondsLeft}`);
    } else {
        console.log(`${totalMinutes}:${secondsLeft}`);
    }
}

sumSeconds(["35", "45", "44"])