function oscars(input) {

    let actorName = input[0];
    let academyPoints = Number(input[1]);


    for (let i = 3; i < input.length; i++) {

        let judge = input[i];
        let judgePoints = Number(input[i + 1]);

        academyPoints += (Number(judge.length) * judgePoints) / 2;

        if (academyPoints > 1250.5) {
            break;
        }

        i++;
    }
    if (academyPoints > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    }

}

oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])
