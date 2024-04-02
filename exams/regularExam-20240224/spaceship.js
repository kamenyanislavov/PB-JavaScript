function spaceship(input) {

    let width = Number(input[0]); // of the spaceship
    let lenght = Number(input[1]);
    let height = Number(input[2]);
    let austronautAvHeigh = Number(input[3]); // average hight of the austronauts

    let austronautsNumber = 0;
    let spaceshipVolume = 0;

    spaceshipVolume = width * lenght * height;
    austronautsNumber = spaceshipVolume / (austronautAvHeigh + 0.40) / 4;

    if (austronautsNumber > 10) {
        console.log(`The spacecraft is too big.`);
    } else if (austronautsNumber < 3) {
        console.log(`The spacecraft is too small.`);
    } else {
        console.log(`The spacecraft holds ${Math.floor(austronautsNumber)} astronauts.`);
    }
}

spaceship(["3.5",
    "4",
    "5",
    "1.70"])
