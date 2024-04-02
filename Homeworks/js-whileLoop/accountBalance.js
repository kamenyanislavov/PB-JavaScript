function accountBalance(input) {

    let i = 0;
    let currentInput = input[i];
    let sum = 0;

    while (currentInput !== "NoMoreMoney") {
        let money = Number(currentInput);
        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${money.toFixed(2)}`);
        sum += money
        i++
        currentInput = input[i];
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"])
