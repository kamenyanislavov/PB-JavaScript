function vetParking(input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);
    let counter = 0;
    let dayBill = 0;
    let totalBill = 0;


    for (let d = 1; d <= days; d++) {
        counter++;

        for (let h = 1; h <= hours; h++) {
            if (d % 2 === 0 && h % 2 !== 0) {
                dayBill += 2.50;
            } else if (d % 2 !== 0 && h % 2 === 0) {
                dayBill += 1.25;
            } else {
                dayBill += 1;
            }
        }
        console.log(`Day: ${counter} - ${dayBill.toFixed(2)} leva`);
        totalBill += dayBill;
        dayBill = 0;
    }
    console.log(`Total: ${totalBill.toFixed(2)} leva`);
}

vetParking(["2", "5"])
