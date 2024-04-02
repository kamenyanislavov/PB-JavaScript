function seriesCalculator(input) {

    let movieName = input[0];
    let seasons = Number(input[1]);
    let series = Number(input[2]); // series per season
    let minutes = Number(input[3]); // minutes per serie

    let totalTime = 0;

    totalTime = seasons * series * (minutes * 1.20) + seasons * 10;

    console.log(`Total time needed to watch the ${movieName} series is ${Math.floor(totalTime)} minutes.`);
}

seriesCalculator(["Lucifer",
    "3",
    "18",
    "55"])
