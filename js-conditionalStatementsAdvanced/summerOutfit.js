function recommendClothes(input) {
    let temperature = Number(input[0]);
    let timeOfDay = input[1];

    let outfit = '';
    let shoes = '';

    if (temperature >= 10 && temperature <= 18) {
        switch (timeOfDay) {
            case "Morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon":
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else if (temperature > 18 && temperature <= 24) {
        switch (timeOfDay) {
            case "Afternoon":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Morning":
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else if (temperature >= 25) {
        switch (timeOfDay) {
            case "Morning":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon":
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }

    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}

recommendClothes(["16", "Morning"])
