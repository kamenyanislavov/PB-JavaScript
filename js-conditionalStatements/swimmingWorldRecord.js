function swimTime(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let secondsPerMeter = Number(input[2]);
    let deley = Math.floor((distance / 15)) * 12.5;
    let time = (distance * secondsPerMeter) + deley;

    if (time < record) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(time - record).toFixed(2)} seconds slower.`);
    }
}

swimTime(["55555.67", "3017", "5.03"])