function multiplicationTabel(input) {

    let multiplier1 = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
        let multiplier2 = i;
        console.log(`${multiplier2} * ${multiplier1} = ${multiplier2 * multiplier1}`);

    }
}

multiplicationTabel(["5"])