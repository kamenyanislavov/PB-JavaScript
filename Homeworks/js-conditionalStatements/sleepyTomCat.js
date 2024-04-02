function tomSleepWell(input) {
    let restDays = input[0];
    let playTime = (365 - restDays) * 63 + restDays * 127;

    if (playTime > 30000) {
        let hours = Math.floor((playTime - 30000) / 60);
        let minutes = playTime - 30000 - hours * 60;

        console.log("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        let hours = Math.floor((30000 - playTime) / 60);
        let minutes = 30000 - playTime - hours * 60;

        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}

tomSleepWell([113])