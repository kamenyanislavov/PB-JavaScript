function numbers1toNstep3(input) {
    let end = Number(input[0]);

    for (let i = 1; i <= end; i += 3) {
        console.log(i);
    }
}

numbers1toNstep3(["10"])