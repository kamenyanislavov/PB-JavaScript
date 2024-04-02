function trekkingMania(input) {

    let groupNumber = Number(input.shift());
    let Musala = 0; // climbers climbed the peak
    let Monblanc = 0;
    let Kilimanjaro = 0;
    let K2 = 0;
    let Everest = 0;
    let totalNumber = 0; // total number of climbers

    for (let i = 1; i <= groupNumber; i++) {
        let currentGroup = Number(input.shift());
        totalNumber += currentGroup;

        if (currentGroup <= 5) {
            Musala += currentGroup;
        } else if (currentGroup <= 12) {
            Monblanc += currentGroup;
        } else if (currentGroup <= 25) {
            Kilimanjaro += currentGroup;
        } else if (currentGroup <= 40) {
            K2 += currentGroup;
        } else {
            Everest += currentGroup;
        }
    }
    console.log(`${(Musala / totalNumber * 100).toFixed(2)}%`);
    console.log(`${(Monblanc / totalNumber * 100).toFixed(2)}%`);
    console.log(`${(Kilimanjaro / totalNumber * 100).toFixed(2)}%`);
    console.log(`${(K2 / totalNumber * 100).toFixed(2)}%`);
    console.log(`${(Everest / totalNumber * 100).toFixed(2)}%`);

}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
