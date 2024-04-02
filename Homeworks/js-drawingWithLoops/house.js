function house(input) {

    let n = Number(input[0]);

    for (let i = 0; i <= (n + 1) / 2; i ++) {

        if (n % 2 === 0) {
            console.log(" ".repeat(n - i) + "**".repeat(i + 1) + " ".repeat(n - i));
        } else {
            console.log(" ".repeat(n - i) + "*".repeat(i) + " ".repeat(n - i));
        }
    }

}

house(["5"])