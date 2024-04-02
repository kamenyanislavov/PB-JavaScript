
function areaFigures(input) {
    
let figure = input[0];
let area = 0;

if (figure == "square") {
    let a = Number(input[1]);
    area = a * a;
} else if (figure == "rectangle") {
    let a = Number(input[1]);
    let b = Number(input[2]);
    area = a * b;
} else if (figure == "circle") {
    let radius = Number(input[1]);
    area = Math.PI * radius * radius;
} else if (figure == "triangle") {
    let a = Number(input[1]);
    let ha = Number(input[2]);
    area = a * ha / 2;
}
console.log(area.toFixed(3));

}

areaFigures(["rectangle", "4.5", "20"]);