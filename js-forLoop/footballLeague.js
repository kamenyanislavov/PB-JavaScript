function footballLeague(input) {
    let stadiumCapacity = Number(input[0]);
    let fans = Number(input[1]);
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let i = 2; i < input.length; i++) {
        let sector = input[i];

        switch (sector) {
            case "A":
                sectorA += 1;
                break;

            case "B":
                sectorB += 1;
                break;

            case "V":
                sectorV += 1;
                break;

            case "G":
                sectorG += 1;
                break;
        }
    }
    console.log(`${(sectorA / fans * 100).toFixed(2)}%`);
    console.log(`${(sectorB / fans * 100).toFixed(2)}%`);
    console.log(`${(sectorV / fans * 100).toFixed(2)}%`);
    console.log(`${(sectorG / fans * 100).toFixed(2)}%`);
    console.log(`${(fans / stadiumCapacity * 100).toFixed(2)}%`);
}

footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"])