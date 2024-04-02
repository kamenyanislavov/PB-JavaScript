function deerFood(input) {

    let days = Number(input[0]);
    let foodKg = Number(input[1]);
    let deer1foodDay = Number(input[2]);
    let deer2foodDay = Number(input[3]);
    let deer3foodDay = Number(input[4]);

    let foodNeeded = days * (deer1foodDay + deer2foodDay + deer3foodDay);

    if (foodKg >= foodNeeded) {
        console.log(`${Math.floor(foodKg - foodNeeded)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(foodNeeded - foodKg)} more kilos of food are needed.`);
    }

}

deerFood(["2",
    "10",
    "1",
    "1",
    "2"])
