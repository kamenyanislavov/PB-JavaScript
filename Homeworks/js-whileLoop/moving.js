function moving(input) {

    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let hight = Number(input[2]);

    let freeSpace = width * lenght * hight;
    let i = 3;
    let boxes = input[i];



    while (boxes !== "Done") {

        boxes = Number(input[i]);
        freeSpace -= boxes;

        if (freeSpace <= 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }

        i++
        boxes = input[i];
    }

    if (boxes === "Done") {
        console.log(`${freeSpace} Cubic meters left.`);
    }

}

moving

    (["10",
        "10",
        "2",
        "20",
        "20",
        "20",
        "20",
        "122"])

// (["10", 
// "1",
// "2",
// "4", 
// "6",
// "Done"])

