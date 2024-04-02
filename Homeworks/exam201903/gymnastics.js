function gymnasticsPoints(input) {

    let team = input[0];
    let apparatus = input[1];

    switch (team) {

        case "Russia":
            if (apparatus === "ribbon") {
                difficulty = 9.100;
                performance = 9.400;
            } else if (apparatus === "hoop") {
                difficulty = 9.300;
                performance = 9.800;
            } else if (apparatus === "rope") {
                difficulty = 9.600;
                performance = 9.000;
            }
            break;

        case "Bulgaria":
            if (apparatus === "ribbon") {
                difficulty = 9.600;
                performance = 9.400;
            } else if (apparatus === "hoop") {
                difficulty = 9.550;
                performance = 9.750;
            } else if (apparatus === "rope") {
                difficulty = 9.500;
                performance = 9.400;
            }
            break;

        case "Italy":
            if (apparatus === "ribbon") {
                difficulty = 9.200;
                performance = 9.500;
            } else if (apparatus === "hoop") {
                difficulty = 9.450;
                performance = 9.350;
            } else if (apparatus === "rope") {
                difficulty = 9.700;
                performance = 9.150;
            }
            break;
    }
    console.log(`The team of ${team} get ${(difficulty + performance).toFixed(3)} on ${apparatus}.`);
    console.log(`${(100 % - ((difficulty + performance) / 20.000 * 100)).toFixed(2)}%`);
}

gymnasticsPoints(["Bulgaria", "ribbon"])