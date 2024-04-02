function numbersFronNto1(input) {
    let num = Number(input[0]);

    for (let i = num; i >= 1; i--) {
        console.log(num);
        num -= 1
    }
}

numbersFronNto1(["2"])