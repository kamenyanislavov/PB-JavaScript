function checkNumber(input) {
    let number = Number(input[0]);

    if (number >= - 100 && number <= 100) {
        switch (number) {
            case 0: console.log("No"); break;
            default: console.log("Yes"); break;
        }
    } else {
        console.log("No");
    }
}

checkNumber(["-15"])