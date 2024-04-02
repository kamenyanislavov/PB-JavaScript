function sumNumbers(input) {

    let number = Number(input[0]);
    let i = 1;
    let currNumber = Number(input[i]);
    let sum = 0;

    while (sum < number) {

        sum += currNumber;
        i++
        currNumber = Number(input[i]);
    }

    console.log(sum);

}

sumNumbers(["100", "10", "20", "30", "40"])
