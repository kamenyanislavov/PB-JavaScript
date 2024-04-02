function personTitles(input) {
    let age = Number(input[0]);
    let sex = input[1];

    if (age >= 16) {
        // if (sex === "m") {
        //     console.log("Mr.");
        // } else {
        //     console.log("Ms.");
        // }
        switch (sex) {
            case "m": console.log("Mr."); break;
            case "f": console.log("Ms."); break;
        }
    } else if (age < 16) {
        // if (sex === "m") {
        //     console.log("Master");
        // } else {
        //     console.log("Miss");
        // }
        switch (sex) {
            case "m": console.log("Master"); break;
            case "f": console.log("Miss"); break;
        }
    }
}

personTitles(["12", "f"])
