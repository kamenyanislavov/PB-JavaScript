function easterShop(input) {

    let eggStock = Number(input[0]);

    let i = 1;
    let command = input[i];
    i++;
    let eggs = 0;

    let eggsSold = 0;

    while (command !== "Close") {
        eggs = Number(input[i]);
        i++;

        if (command === "Buy") {
            if ((eggStock - eggs) < 0) {
                console.log("Not enough eggs in store!");
                console.log(`You can buy only ${eggStock}.`);
                break;
            }
            eggStock -= eggs;
            eggsSold += eggs;
        }
        if (command === "Fill") {
            eggStock += eggs;
        }
        if (command === "Close") {
            break;
        }
        
        command = input[i];
        i++;
    }

    if (command === "Close") {
        console.log("Store is closed!");
        console.log(`${eggsSold} eggs sold.`);
    }

}

easterShop(["13",
    "Buy",
    "8",
    "Fill",
    "3",
    "Buy",
    "10"])
