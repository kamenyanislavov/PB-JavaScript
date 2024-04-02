function marks(input) {
    let numberOfStudents = Number(input[0]);

    let topGroup = 0;
    let group4To5 = 0;
    let group3To4 = 0;
    let failGroup = 0;
    let marksSum = 0;

    for (let i = 1; i < input.length; i++) {
        let currentMark = Number(input[i]);

        if (currentMark >= 2.00 && currentMark <= 2.99) {
            failGroup += 1;
            marksSum = marksSum + currentMark;
        } else if (currentMark >= 3.00 && currentMark <= 3.99) {
            group3To4 += 1;
            marksSum = marksSum + currentMark;
        } else if (currentMark >= 4.00 && currentMark <= 4.99) {
            group4To5 += 1;
            marksSum = marksSum + currentMark;
        } else if (currentMark >= 5.00 && currentMark <= 6.00){
            topGroup += 1;
            marksSum = marksSum + currentMark;
        }
    }
    console.log(`Top students: ${(topGroup / numberOfStudents * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(group4To5 / numberOfStudents * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(group3To4 / numberOfStudents * 100).toFixed(2)}%`);
    console.log(`Fail: ${(failGroup / numberOfStudents * 100).toFixed(2)}%`);
    console.log(`Average: ${(marksSum / numberOfStudents).toFixed(2)}`);
}

marks(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"])