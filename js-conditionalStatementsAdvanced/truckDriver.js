function truckDriverSalary(input) {
    let season = input[0];
    let kmPerMonth = Number(input[1]);
    let salary = 0;

    if (kmPerMonth <= 5000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                salary = kmPerMonth * 4 * 0.75;
                break;

            case "Summer":
                salary = kmPerMonth * 4 * 0.90;
                break;

            case "Winter":
                salary = kmPerMonth * 4 * 1.05;
                break;
        }
    } else if (kmPerMonth <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                salary = kmPerMonth * 4 * 0.95;
                break;

            case "Summer":
                salary = kmPerMonth * 4 * 1.10;
                break;

            case "Winter":
                salary = kmPerMonth * 4 * 1.25;
                break;
        }
    } else if (kmPerMonth <= 20000) {
        salary = kmPerMonth * 4 * 1.45;
    }

    salary = salary * 0.90;

    console.log(salary.toFixed(2));
}

truckDriverSalary(["Summer", "3455"])