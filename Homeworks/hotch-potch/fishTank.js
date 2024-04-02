function fishTankWaterNeed(input) {

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let volumeReduction = Number(input[3]) / 100;

    let totalVolumeLiters = (lenght * width * height) / 1000;
    let waterNeeded = totalVolumeLiters - totalVolumeLiters * volumeReduction;

    console.log(waterNeeded);
}

fishTankWaterNeed(["85 ", "75 ", "47 ", "17 "])