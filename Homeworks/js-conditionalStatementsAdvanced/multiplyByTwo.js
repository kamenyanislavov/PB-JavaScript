function multiplyByTwo(input) {
    let i = 0;
    let currentElement = input[i];

    while (currentElement >= 0) {    
        console.log(`Result: ${(currentElement * 2).toFixed(2)}`);
        ++i;
        currentElement = input[i];
    }
    console.log("Negative number!");
    
}

multiplyByTwo([8, 5, 6, -2])
