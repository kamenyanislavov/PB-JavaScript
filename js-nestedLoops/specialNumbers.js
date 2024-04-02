function specialNumbers(input) {

    let number = Number(input[0]);
    let collect = '';
    let specialNumbers = '';

    for (let i = 1111; i <= 9999; i++) {
        let currentNumber = i.toString();


        for (let j = 0; j < currentNumber.length; j++) {

            let digit = Number(currentNumber[j]);

            if (number % digit === 0) {
                collect += digit.toString();
            }
        }
        if (collect === currentNumber) {
            specialNumbers += `${collect} `;
            collect = '';
        } else {
            collect = ''
        }
    }
    console.log(`${specialNumbers}`);


}

specialNumbers(["3"])