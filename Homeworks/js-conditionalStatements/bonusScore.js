function bonusPoints(input) {
    let number = Number(input[0]);
    let bonus = 0;

    if (number <= 100) {
        bonus = 5;
    }else if (number > 1000) {
        bonus = number * 0.1;
    }else if (number > 100) {
        bonus = number * 0.2;
    }
    if (number % 2 === 0) {
        bonus += 1;
    }else if (number % 10 === 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(number + bonus);
}

bonusPoints(["15875"])

function endWithFiveCheck (input){
let n = input[0];

if (n % 10 === 5) {
    console.log("Numbers ends with 5!");
}else {
    console.log("Number doesn't end with 5!");
}

}

endWithFiveCheck([80])