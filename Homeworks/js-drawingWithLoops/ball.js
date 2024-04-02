function ball(input) {

    let n = Number(input[0]);

    for (let i = 0; i <= n; i++) {
        console.log(" ".repeat(n - i) + "*".repeat(i) + "***".repeat(i) + "*".repeat(i) + " ".repeat(n - i));
    }
    for (let i = n; i >= 0; i--) {
        console.log(" ".repeat(n - i) + "*".repeat(i) + "*".repeat(i) + " ".repeat(n - i));
    }

}

ball(["3"])