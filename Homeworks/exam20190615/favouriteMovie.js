function favouriteMovie(input) {

    let i = 0;
    let movieName = input[i];
    let moviePoints = 0;
    let pointsMax = 0;
    let favourite = "";
    let counter = 0;

    while (movieName !== "STOP") {

        moviePoints = 0;

        if (counter === 7) {
            console.log("The limit is reached.");
            break;
        }

        for (let l = 0; l < movieName.length; l++) {
            let char = "";
            char = movieName[l];

            if (char === " ") {
                moviePoints += movieName.charCodeAt(l);
            } else if (!isNaN(char)) {
                moviePoints += movieName.charCodeAt(l);
            } else if (char === char.toUpperCase(l)) {
                moviePoints += (movieName.charCodeAt(l) - movieName.length);
            } else {
                moviePoints += (movieName.charCodeAt(l) - (movieName.length * 2));
            }
        }

        if (pointsMax < moviePoints) {
            pointsMax = moviePoints;
            favourite = movieName;
        }

        counter++;
        i++;
        movieName = input[i];
    }
    console.log(`The best movie for you is ${favourite} with ${pointsMax} ASCII sum.`);

}

favouriteMovie(["2",
    "School story 2",
    "Shrek 2",
    "Ice age",
    "STOP"])

