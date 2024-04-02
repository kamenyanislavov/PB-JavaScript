


function foodDelivery(input) {

    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegMenus = Number(input[2]);

    let sumChickenMenus = chickenMenus * 10.35;
    let sumFishMenus = fishMenus * 12.40;
    let sumVegMenus = vegMenus * 8.15;
    let sumAllMenus = sumChickenMenus + sumFishMenus + sumVegMenus;

    let sumDessert = sumAllMenus * 0.2;

    let orderPrice = sumAllMenus + sumDessert + 2.50;

    console.log(orderPrice);



}

foodDelivery(["2 ", "4 ", "3 "])