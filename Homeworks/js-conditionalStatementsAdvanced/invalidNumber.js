function numberCheck(input) {
    let number = Number(input[0]);

    if (number === 0 || (number >= 100 && number <= 200)) {

    } else {
        console.log("invalid");
    }
}

numberCheck(["220"])