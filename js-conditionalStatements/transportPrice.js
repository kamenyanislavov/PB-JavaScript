function transportPrice(input) {
let distance = input[0];
let time = input[1];

if (distance >= 100) {
    console.log((distance * 0.06).toFixed(2));
} else if (distance >= 20) {
    console.log((distance * 0.09).toFixed(2));
} else if (time === "night") {
    console.log((0.70 + (distance * 0.90)).toFixed(2));
} else {
    console.log((0.70 + (distance * 0.79)).toFixed(2));
}
}

transportPrice([5, "day"])