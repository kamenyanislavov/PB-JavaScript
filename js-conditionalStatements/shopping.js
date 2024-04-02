
function shoppingBudget(input) {

    let budget = Number(input[0]);
    let videoCardQty = Number(input[1]);
    let processorsQty = Number(input[2]);
    let ramQty = Number(input[3]);

    let videoCardBill = videoCardQty * 250;
    let prcessorBill = processorsQty * videoCardBill * 0.35;
    let ramBill = ramQty * videoCardBill * 0.10;
    let bill = videoCardBill + prcessorBill + ramBill
    if (videoCardQty > processorsQty ) {
        bill = bill * 0.85;
    }
    if ( bill <= budget) {
        console.log(`You have ${(budget - bill).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(bill - budget).toFixed(2)} leva more!`);
    }
}

shoppingBudget(["900", "2", "1", "3"])