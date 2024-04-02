function profitFromOrder(input) {
let magnoliaQty = input[0];
let hyacinthQty = input[1];
let roseQty = input[2];
let cactusQty = input[3];
let presentPrice = input[4];
let orderSum = (magnoliaQty * 3.25 + hyacinthQty * 4.00 + roseQty * 3.50 + cactusQty * 8.00) * 0.95; //there is 5% tax

if (orderSum >= presentPrice) {
    console.log(`She is left with ${Math.floor(orderSum - presentPrice)} leva.`);
} else {
    console.log(`She will have to borrow ${Math.ceil(presentPrice - orderSum)} leva.`);
}
}

profitFromOrder([15, 7, 5, 10, 100])