function calculatePrice(input) {
    let fruit = input[0];
    let day = input[1];
    let qty = Number(input[2]);
    let price = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        if (fruit === "banana") {
            price = qty * 2.50;
            console.log(price.toFixed(2));
        } else if (fruit === "apple") {
            price = qty * 1.20;
            console.log(price.toFixed(2));
        } else if (fruit === "orange") {
            price = qty * 0.85;
            console.log(price.toFixed(2));
        } else if (fruit === "grapefruit") {
            price = qty * 1.45;
            console.log(price.toFixed(2));
        } else if (fruit === "kiwi") {
            price = qty * 2.70;
            console.log(price.toFixed(2));
        } else if (fruit === "pineapple") {
            price = qty * 5.50;
            console.log(price.toFixed(2));
        } else if (fruit === "grapes") {
            price = qty * 3.85;
            console.log(price.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (day === "Saturday" || day === "Sunday") {
        if (fruit === "banana") {
            price = qty * 2.70;
            console.log(price.toFixed(2));
        } else if (fruit === "apple") {
            price = qty * 1.25;
            console.log(price.toFixed(2));
        } else if (fruit === "orange") {
            price = qty * 0.90;
            console.log(price.toFixed(2));
        } else if (fruit === "grapefruit") {
            price = qty * 1.60;
            console.log(price.toFixed(2));
        } else if (fruit === "kiwi") {
            price = qty * 3.00;
            console.log(price.toFixed(2));
        } else if (fruit === "pineapple") {
            price = qty * 5.60;
            console.log(price.toFixed(2));
        } else if (fruit === "grapes") {
            price = qty * 4.20;
            console.log(price.toFixed(2));
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }

}

calculatePrice(["tomato", "Mondday", "0.5"])
