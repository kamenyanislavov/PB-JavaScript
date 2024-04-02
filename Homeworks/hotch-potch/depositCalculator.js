

function depositCalculator(input) {

    let depositAmount = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestRate = Number(input[2]) / 100;

    let endPeriodDepositAmount = depositAmount + depositPeriod * ((depositAmount * annualInterestRate) / 12);

console.log(endPeriodDepositAmount);

}

depositCalculator(["200 ", "3 ", "5.7 "])
