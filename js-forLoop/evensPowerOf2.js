function evenPowerOf2(input) {
    let power = Number(input[0]);
    let result = 0;

    for (let i = 0; i <= power; i++) {
        if (i % 2 === 0) {
            result = 2 ** i
            console.log(result);
        }
    }
}

evenPowerOf2(["3"])