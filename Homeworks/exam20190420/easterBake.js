function easterBread(input) {

    let easterBreads = Number(input[0]);

    let sugar = 0;
    let flour = 0;

    let test = easterBread * 2;
    let totalSugar = 0;
    let totalFlour = 0;
    let sugarPacks = 0;
    let flourPacks = 0;
    let maxSugar = Number.NEGATIVE_INFINITY;
    let maxFlour = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= input.length - 1; i += 2) {
        sugar = Number(input[i]);
        flour = Number(input[i + 1]);

        if (sugar > maxSugar) {
            maxSugar = sugar;
        }
        if (flour > maxFlour) {
            maxFlour = flour;
        }

        totalSugar += sugar;
        totalFlour += flour;

    }

    sugarPacks = totalSugar / 950;
    flourPacks = totalFlour / 750;

    console.log(`Sugar: ${Math.ceil(sugarPacks)}`);
    console.log(`Flour: ${Math.ceil(flourPacks)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}

easterBread(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])
