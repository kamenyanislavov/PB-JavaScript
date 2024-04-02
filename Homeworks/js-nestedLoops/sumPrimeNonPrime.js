function sumPrimeNonPrime(input) {

    let i = 0;
    let command = input[i];
    i++;

    let primeNumSum = 0;
    let nonPrimeNumSum = 0;

    while (command !== "stop") {
        let currentNumber = Number(command);
        let isPrime = true;

        for (let i = 2; i < currentNumber; i++) {
            if (currentNumber % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (currentNumber < 0) {
            console.log("Number is negative.");
            command = input[i];
            i++;
            continue;
        }
        if (isPrime === true) {
            primeNumSum += currentNumber;
        } else {
            nonPrimeNumSum += currentNumber;
        }
        command = input[i];
        i++;
    }

    console.log(`Sum of all prime numbers is: ${primeNumSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumSum}`);

}

sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "-4",
    "19",
    "4",
    "stop"])
