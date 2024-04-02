function happyCatParking(input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);

    let daySum = 0;
    let totalSum = 0;

    for (let day = 1; day <= days; day++) {

        for (let hour = 1; hour <= hours; hour++) {

            if (day % 2 === 0 && hour % 2 !== 0) {
                daySum += 2.50;
                
            } else if (day % 2 !== 0 && hour % 2 === 0) {
                daySum += 1.25;
            } else {
                daySum += 1;
            }
           
            
        }
        console.log(`Day: ${day} - ${daySum.toFixed(2)} leva`);
        totalSum += daySum;
        daySum = 0;
    }

    console.log(`Total: ${totalSum.toFixed(2)} leva`);

}

happyCatParking(["2", "5"])