function sunglasses(input) {

    let n = Number(input[0]);

    console.log("*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n));

    for (let i = 0; i <= (n - 3); i++) {

        if (i === Math.floor((n - 1) / 2) - 1) {
            console.log("*" + "/".repeat(2 * (n - 1)) + "*" + "|".repeat(n) + "*" + "/".repeat(2 * (n - 1)) + "*");
        } else {
            console.log("*" + "/".repeat(2 * (n - 1)) + "*" + " ".repeat(n) + "*" + "/".repeat(2 * (n - 1)) + "*");
        }

    }

    console.log("*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n));

}

sunglasses(["10"])