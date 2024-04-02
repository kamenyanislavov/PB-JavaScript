function movieDay(input) {

    let time = Number(input[0]); // time to make the movie
    let scenes = Number(input[1]) // number of scenes in the movie
    let timePerScene = Number(input[2]);

    let timeNeeded = 0;

    timeNeeded = time * 0.15 + scenes * timePerScene;

    if (time >= timeNeeded) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(time - timeNeeded)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(timeNeeded - time)} minutes.`);
    }

}

movieDay(["120",
    "10",
    "11"])
