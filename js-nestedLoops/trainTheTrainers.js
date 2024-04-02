function trainTheTrainers(input) {

    let judgeNumber = Number(input[0]);

    let i = 1;
    let command = input[i];
    i++;

    let totalGradeSum = 0;
    let gradeCount = 0;

    while (command !== "Finish") {
        let presentationName = command;
        let presentationGradeSum = 0;
        for (let grade = 1; grade <= judgeNumber; grade++) {
            let currGrade = Number(input[i]);
            presentationGradeSum += currGrade;
            totalGradeSum += currGrade;
            gradeCount++;
            i++;
        }

        console.log(`${presentationName} - ${(presentationGradeSum / judgeNumber).toFixed(2)}.`);

        command = input[i];
        i++;
    }

    console.log(`Student's final assessment is ${(totalGradeSum / gradeCount).toFixed(2)}.`);
}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])
