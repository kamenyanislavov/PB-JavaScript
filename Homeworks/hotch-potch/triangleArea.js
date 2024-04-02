function triangleArea(input) {
    let a = input[0];
    let ha = input[1];
    let area = a * ha / 2;

    console.log(area.toFixed(2));
}

triangleArea([20, 30])