function numberWorkPlaces(input){
let lenght = input[0];
let width = input[1];
let workPlacesPerRaw = Math.floor((width - 1.00) / 0.70);
let workPlacesPerColumn = Math.floor(lenght / 1.20);

let workPlaces = (workPlacesPerRaw * workPlacesPerColumn) - 3;

console.log(workPlaces);

}

numberWorkPlaces([15, 8.9])