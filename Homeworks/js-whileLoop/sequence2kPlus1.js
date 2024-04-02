function sequence(input) {
    let number = Number(input[0]);
    let num = 1;

    while (num <= number) {

        console.log(num);
        num = num * 2 + 1;
    }

}

sequence(["17"])