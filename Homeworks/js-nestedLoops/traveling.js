function traveling(input) {

    let i = 0;
    let destination = input[i];
    i++;
    let budget = Number(input[i]);
    let savings = 0;

    while (destination !== "End") {


        while (savings <= budget) {
            i++;
            let money = Number(input[i]);
            savings += money;
            // i++;
            // money = Number(input[i]);
            if (savings >= budget) {
                console.log(`Going to ${destination}!`);
            }
        }
        if (destination === "End") {
            break;
        }
        destination = input[i];
        i++;
        budget = Number(input[i]);
        savings = 0;


    }
}

traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
