function numberOperations(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operation = (input[2]);
    let result = 0;

    switch (operation) {
        case "+": result = n1 + n2; break;
        case "-": result = n1 - n2; break;
        case "*": result = n1 * n2; break;
        case "/": result = n1 / n2; break;
        case "%": result = n1 % n2; break;
    }

    if (operation === "+" || operation === "-" || operation === "*") {
        if (result % 2 === 0) {
            console.log(`${n1} ${operation} ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} ${operation} ${n2} = ${result} - odd`);
        }
    } else if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
    } else if (operation === "%") {
        console.log(`${n1} % ${n2} = ${result}`);
    } else if (operation === "/") {
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    }
}

numberOperations(["10", "3", "%"])



