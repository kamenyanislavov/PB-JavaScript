function transport(input) {

    let loadsQty = Number(input[0]);

    let totalPrice = 0;
    let minibusTons = 0;
    let truckTons = 0;
    let trainTons = 0;
    let totalTons = 0;

    for (let i = 1; i < input.length; i++) {
        let currentLoad = Number(input[i]);

        if (currentLoad < 4) {
            minibusTons = minibusTons + currentLoad;
            totalPrice = totalPrice + currentLoad * 200;
        }else if (currentLoad < 12) {
            truckTons = truckTons + currentLoad;
            totalPrice = totalPrice + currentLoad * 175;
        }else {
            trainTons = trainTons + currentLoad;
            totalPrice = totalPrice + currentLoad * 120;
        }
    }
    totalTons = minibusTons + truckTons + trainTons;
    console.log((totalPrice / totalTons).toFixed(2));
    console.log(`${(minibusTons / totalTons * 100).toFixed(2)}%`);
    console.log(`${(truckTons / totalTons * 100).toFixed(2)}%`);
    console.log(`${(trainTons / totalTons * 100).toFixed(2)}%`);
}

transport(["4", "1", "5", "16", "3"])