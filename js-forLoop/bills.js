function familyBills(input) {

    let months = Number(input[0]);
    let electricityTotal = 0;
    let water = 0;
    let internet = 0;
    let other = 0;
    let total = 0;

    for (let i = 1; i < input.length; i++) {
        let electricity = Number(input[i]);

        electricityTotal += electricity;
        water += 20;
        internet += 15;
        other += (electricity + 20 + 15) * 1.2;
        total = electricityTotal + water + internet + other;
    }

    console.log(`Electricity: ${electricityTotal.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${(total / months).toFixed(2)} lv`);

}

familyBills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"])