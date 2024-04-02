function easterEggs(input) {

    let eggQty = Number(input[0]);

    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0;
    let color = '';
    let coloOfMax = '';
    let maxCount = Number.NEGATIVE_INFINITY;

    for (let i = 1; i < input.length; i++) {
        color = input[i];

        switch (color) {
            case "red":
                redEggs++;
                if (redEggs > maxCount) {
                    maxCount = redEggs;
                    coloOfMax = color;
                }
                break;
            case "orange":
                orangeEggs++;
                if (orangeEggs > maxCount) {
                    maxCount = orangeEggs;
                    coloOfMax = color;
                }
                break;
            case "blue":
                blueEggs++;
                if (blueEggs > maxCount) {
                    maxCount = blueEggs;
                    coloOfMax = color;
                }
                break;
            case "green":
                greenEggs++;
                if (greenEggs > maxCount) {
                    maxCount = greenEggs;
                    coloOfMax = color;
                }
                break;

        }


    }

    console.log(`Red eggs: ${redEggs}`);
    console.log(`Orange eggs: ${orangeEggs}`);
    console.log(`Blue eggs: ${blueEggs}`);
    console.log(`Green eggs: ${greenEggs}`);
    console.log(`Max eggs: ${maxCount} -> ${coloOfMax}`);

}

easterEggs(["7",
    "orange",
    "blue",
    "green",
    "green",
    "blue",
    "red",
    "green"])
