function movieRatings(input) {

    let movieNumber = Number(input[0]);

    let maxRating = Number.MIN_VALUE;
    let minRating = Number.MAX_VALUE;
    let ratingSum = 0;
    let highesRatingMovie = '';
    let lowestRatingMovie = '';

    for (let i = 1; i < input.length; i += 2) {

        let movie = input[i];
        let rating = Number(input[i + 1]);

        if (rating > maxRating) {
            maxRating = rating;
            highesRatingMovie = movie;
        } 
        if (rating < minRating) {
            minRating = rating;
            lowestRatingMovie = movie;
        }
        ratingSum += rating;

    }


    console.log(`${highesRatingMovie} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${lowestRatingMovie} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${(ratingSum / movieNumber).toFixed(1)}`);


}

movieRatings

// (["5",
//     "A Star is Born",
//     "7.8",
//     "Creed 2",
//     "7.3",
//     "Mary Poppins",
//     "7.2",
//     "Vice",
//     "7.2",
//     "Captain Marvel",
//     "7.1"])


    (["3",
"Interstellar",
"8.0",
"Dangal",
"8.1",
"Green Book",
"8.5"])
