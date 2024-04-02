function needToRefuel(input) {
    let fuelName = input[0];
    let fuelQty = input[1];

    if (fuelName === "Diesel") {
        fuelName = "diesel";
    } else if (fuelName === "Gasoline") {
        fuelName = "gasoline";
    } else if (fuelName === "Gas") {
        fuelName = "gas";
    }

if (fuelName !== "diesel" && fuelName !== "gasoline" && fuelName !== "gas") {
    console.log(`Invalid fuel!`);
} else if (fuelQty >= 25) {
        console.log(`You have enough ${fuelName}.`);
    } else {
        console.log(`Fill your tank with ${fuelName}!`);
    }
}

needToRefuel(["Diesel", 40])