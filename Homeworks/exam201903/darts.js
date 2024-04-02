function darts(input) {

    let player = input[0];

    let startPoints = 301;
    let goodShots = 0;
    let badShots = 0;

    let i = 1;
    let zone = input[i];
    i++;

    while (zone !== "Retire") {
        let points = Number(input[i]);

        switch (zone) {

            case "Single":
                if (points <= startPoints) {
                    startPoints = startPoints - points;
                    goodShots++
                    if (startPoints === 0) {
                        console.log(`${player} won the leg with ${goodShots} shots.`);
                        return;
                    }
                } else {
                    badShots++;
                }
                i++;
                zone = input[i];
                i++;
                break;

            case "Double":
                if ((points * 2) <= startPoints) {
                    startPoints = startPoints - (points * 2);
                    goodShots++
                    if (startPoints === 0) {
                        console.log(`${player} won the leg with ${goodShots} shots.`);
                        return;
                    }
                } else {
                    badShots++;
                }
                i++;
                zone = input[i];
                i++;
                break;

            case "Triple":
                if ((points * 3) <= startPoints) {
                    startPoints = startPoints - (points * 3);
                    goodShots++
                    if (startPoints === 0) {
                        console.log(`${player} won the leg with ${goodShots} shots.`);
                        return;
                    }
                } else {
                    badShots++;
                }
                i++;
                zone = input[i];
                i++;
                break;


        }

    }

    // if (startPoints === 0) {
    //     console.log(`${player} won the leg with ${goodShots} shots.`);
    // }

    if (zone === "Retire") {
        console.log(`${player} retired after ${badShots} unsuccessful shots.`);
    }
}

darts

    // (["Michael van Gerwen",
    //     "Triple",
    //     "20",
    //     "Triple",
    //     "19",
    //     "Double",
    //     "10",
    //     "Single",
    //     "3",
    //     "Single",
    //     "1",
    //     "Triple",
    //     "20",
    //     "Triple",
    //     '20',
    //     "Double",
    //     "20"])


    (["Stephen Bunting",
        "Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"7",
"Single",
"12",
"Double",
"1",
"Single",
"1"])


// (["Rob Cross",
// "Triple",
// "20",
// "Triple",
// "20",
// "Triple",
// "20",
// "Triple",
// "20",
// "Double",
// "20",
// "Triple",
// "20",
// "Double",
// "5",
// "Triple",
// "10",
// "Double",
// "6",
// "Retire"])
