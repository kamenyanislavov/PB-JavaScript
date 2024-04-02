
function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzleQty = Number(input[1]);
    let dollQty = Number(input[2]);
    let bearQty = Number(input[3]);
    let minionQty = Number(input[4]);
    let truckQty = Number(input[5]);

    let toyOrderSum = puzzleQty * 2.60 + dollQty * 3.00 + bearQty * 4.10 + minionQty * 8.20 + truckQty * 2.00;
    let toyTotalQty = puzzleQty + dollQty + bearQty + minionQty + truckQty;

    if (toyTotalQty >= 50) {
        toyOrderSum = toyOrderSum * 0.75;
    } 

    let rent = toyOrderSum * 0.10;
    toyOrderSum = toyOrderSum - rent;

    if (toyOrderSum >= tripPrice) {
        console.log(`Yes! ${(toyOrderSum - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - toyOrderSum).toFixed(2)} lv needed.`);
    }


}

toyShop(["320", "8", "2", "5", "5", "1"])