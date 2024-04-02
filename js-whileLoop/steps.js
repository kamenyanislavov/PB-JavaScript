function steps(input) {

    let i = 0
    let steps = input[i];
    let totalSteps = 0;
    let stepsGoingHome = 0;

    while (steps !== "Going home") {

        steps = Number(steps);
        totalSteps += steps;

        if (totalSteps >= 10000) {
            console.log("Goal reached! Good job!"); 
            console.log(`${totalSteps - 10000} steps over the goal!`);
            break;
        }
        i++
        steps = input[i];
    }

    if (totalSteps < 10000) {
        i++
        steps = Number(input[i]);
        totalSteps += steps;
        if (totalSteps >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - 10000} steps over the goal!`);
        } else {
            console.log(`${10000 - totalSteps} more steps to reach goal.`);
        }
    }

}

steps

    // (["1000", "1500", "2000", "6500"])


    // (["1500",
    // "300",
    // "2500",
    // "3000",
    // "Going home",
    // "200"])

    // (["1500",
    //     "3000",
    //     "250",
    //     "1548",
    //     "2000",
    //     "Going home",
    //     "2000"])

    (["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"])
    