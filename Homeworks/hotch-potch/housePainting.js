function housePainting(input){

    let houseHeight = input[0];
    let sideWallLenght = input[1];
    let roofSideWallHeight = input[2];

    const greenPerSquareMeter = 3.4;
    const redPerSquareMeter = 4.3;
    const door = 1.2 * 2.00;
    const windows = 1.5 * 1.5 * 2;

    let frontBackWalls = houseHeight * houseHeight * 2 - door;
    let sideWalls = houseHeight * sideWallLenght * 2 - windows;
    let roof = (houseHeight * sideWallLenght) * 2 + houseHeight * roofSideWallHeight;

    let greenPaint = (frontBackWalls + sideWalls) / greenPerSquareMeter;
    let redPaint = roof / redPerSquareMeter;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));

}

housePainting([6, 10, 5.2])