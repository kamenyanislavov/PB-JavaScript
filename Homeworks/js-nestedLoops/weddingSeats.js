function weddingSeats(input) {

    let lastSector = input[0].charCodeAt();
    let rowsFirstSector = Number(input[1]);
    let oddRowSeats = Number(input[2]);

    let firstSector = "A".charCodeAt();
    let firstSeat = "a".charCodeAt();
    let evenRowSeats = oddRowSeats + 2;
    let lastSeat = firstSeat + evenRowSeats;
    let seatCount = 0;

    for (let sector = firstSector; sector <= lastSector; sector++) {

        for (let rows = 1; rows <= rowsFirstSector; rows++) {

            for (let seat = firstSeat; seat < lastSeat; seat++) {

                if (rows % 2 !== 0 && seat > (lastSeat - 3)) {
                    break;
                }
                console.log(`${String.fromCharCode(sector)}${rows}${String.fromCharCode(seat)} `);

                seatCount++;

            }
        }
        rowsFirstSector += 1;
    }

    console.log(seatCount);
}

weddingSeats(["C", "4", "2"])