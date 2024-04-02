function foodForPets(input) {

    let days = Number(input.shift());
    let availableFood = Number(input.shift());

    let bisquits = 0;
    let daysCounter = 0;
    let dogFood = 0;
    let catFood = 0;
    let totalFoodEaten = 0;

    for (let i = 1; i <= days; i++) {
        let DogFood = Number(input.shift());
        dogFood += DogFood;
        let CatFood = Number(input.shift());
        catFood += CatFood;
        daysCounter++;

        if(daysCounter % 3 === 0) {
            bisquits += (DogFood + CatFood) * 0.1;
        }
        
    }

    totalFoodEaten = dogFood + catFood;

    console.log(`Total eaten biscuits: ${Math.round(bisquits)}gr.`);
    console.log(`${(totalFoodEaten / availableFood * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(dogFood / totalFoodEaten * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(catFood / totalFoodEaten * 100).toFixed(2)}% eaten from the cat.`);


}

foodForPets(["3",
"500",
"100",
"49",
"100",
"50",
"150",
"50"])

