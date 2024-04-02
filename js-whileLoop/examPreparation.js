function examPreparation(input) {

    let fails = Number(input[0]);
    let i = 1;
    let problem = input[i];
    i++
    let grade = Number(input[i]);

    let previousProblem = '';
    let badGrades = 0
    let gradeSum = 0;
    let gradeNumber = 0;

    while (problem !== "Enough") {
        previousProblem = problem

        if (grade <= 4) {
            badGrades += 1
        }

        if (badGrades >= fails) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            break;
        }

        problem += 1
        gradeSum += grade;
        gradeNumber += 1


        i++
        problem = input[i];

        i++
        grade = Number(input[i]);

    }

    if (problem === "Enough") {
        console.log(`Average score: ${(gradeSum / gradeNumber).toFixed(2)}`);
        console.log(`Number of problems: ${gradeNumber}`);
        console.log(`Last problem: ${previousProblem}`);
    }



}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

