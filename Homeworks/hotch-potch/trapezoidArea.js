
function trapezoidArea(input) {
    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);
    let area = ((b1 + b2) * h / 2).toFixed(2);

    console.log(area);
    
}

trapezoidArea([1.2, 2.5, 3.7])

// https://pastebin.com/A4ZC33YC