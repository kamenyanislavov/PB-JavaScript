function catWalking(input) {

    let minutesPerWalk =  Number(input[0]);
    let walksNumber = Number(input[1]);
    let caloriesPerDay = Number(input[2]);

    let caloriesBurned = (minutesPerWalk * walksNumber) * 5;

    if (caloriesBurned >= (caloriesPerDay / 2)) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`);
    }

}

catWalking(["30",
    "3",
    "600"])
