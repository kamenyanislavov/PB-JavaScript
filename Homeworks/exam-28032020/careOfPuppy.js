function careOfPuppy(input) {

    let foodPurchased = Number(input.shift());

    let foodEaten = 0;
    let i = 1;
    let command = input.shift();
    i++;

    while (command !== "Adopted") {
        let dailyFood = Number(command);

        foodEaten += dailyFood;

        command = input.shift();
        i++;
    }

    if ((foodPurchased * 1000) >= foodEaten) {
        console.log(`Food is enough! Leftovers: ${foodPurchased * 1000 - foodEaten} grams.`);
    } else {
        console.log(`Food is not enough. You need ${foodEaten - foodPurchased * 1000} grams more.`);
    }

}

careOfPuppy(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"])

