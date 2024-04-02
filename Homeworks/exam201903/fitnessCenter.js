function fitnessCenter(input) {

    let visitors = Number(input[0]);

    let workoutQty = 0
    let productQty = 0;

    let back = 0;
    let chest = 0;
    let abs = 0;
    let legs = 0;
    let shake = 0;
    let bar = 0;

    for (let index = 1; index < input.length; index++) {

        let comand = input[index];

        switch (comand) {
            case "Chest":
                chest++;
                workoutQty++;
                break;

            case "Abs":
                abs++;
                workoutQty++;
                break;

            case "Legs":
                legs++;
                workoutQty++;
                break;

            case "Back":
                back++;
                workoutQty++;
                break;

            case "Protein shake":
                shake++;
                productQty++;
                break;

            case "Protein bar":
                bar++;
                productQty++;
                break;
        }
    }

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${shake} - protein shake`);
    console.log(`${bar} - protein bar`);
    console.log(`${(workoutQty / visitors * 100).toFixed(2)}% - work out`);
    console.log(`${(productQty / visitors * 100).toFixed(2)}% - protein`);

}
fitnessCenter

    // (["10",
    // "Back",
    // "Chest",
    // "Legs",
    // "Abs",
    // "Protein shake",
    // "Protein bar",
    // "Protein shake",
    // "Protein bar",
    // "Legs",
    // "Abs"])


    (["7",
        "Chest",
        "Back",
        "Legs",
        "Legs",
        "Abs",
        "Protein shake",
        "Protein bar"])
