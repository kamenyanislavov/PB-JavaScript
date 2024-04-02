function mountainRun(input) {

    let record = Number(input[0]); // in seconds
    let distance = Number(input[1]); // total metres
    let speed = Number(input[2]); // metres per second

    let attamptTime = distance * speed + (Math.floor(distance / 50) * 30);

    if (attamptTime < record) {
        console.log(`Yes! The new record is ${attamptTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(attamptTime - record).toFixed(2)} seconds slower.`);
    }
}

mountainRun(["5554.36",
    "1340",
    "3.23"])
