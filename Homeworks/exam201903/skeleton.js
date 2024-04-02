function olympicQuota(input) {

    let controlMinutes = Number(input[0]);
    let controlSeconds = Number(input[1]);
    let trackLength = Number(input[2]);
    let secondsPer100meters = Number(input[3]);

    let contolTotalSeconds = controlMinutes * 60 + controlSeconds;
    let deleySeconds = trackLength / 120 * 2.5;

    let result = trackLength / 100 * secondsPer100meters - deleySeconds;

    if (result <= contolTotalSeconds) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${(result).toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(result - contolTotalSeconds).toFixed(3)} second slower.`);
    }
}

olympicQuota(["2", "12", "1200", "10"])