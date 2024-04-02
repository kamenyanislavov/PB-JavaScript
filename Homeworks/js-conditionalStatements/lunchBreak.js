function luchBreakTime (input) {
    let movieName = input[0];
    let movieLenght = Number(input[1]);
    let breakTime = Number(input[2]);
    let lunchTime = breakTime * 0.125;
    let restTime = breakTime * 0.25;
    let timeLeft = breakTime - lunchTime - restTime;

    if (timeLeft >= movieLenght) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeLeft - movieLenght)} minutes free time.`);
    }else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(movieLenght - timeLeft)} more minutes.`);
    }
}

luchBreakTime(["Teen Wolf", "48", "60"])
