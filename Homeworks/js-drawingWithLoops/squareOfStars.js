function squareOfStars(input) {

    let base = Number(input[0]);

    for (let i = 1; i <= base; i++) {

        console.log(`${'*'} `.repeat(base));
    }

}

squareOfStars(["2"])