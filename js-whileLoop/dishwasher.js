function detergentForDishwasher(input) {

    let bottlesDetergent = Number(input[0]);
    let detergentQtyMl = bottlesDetergent * 750;

    let i = 1;
    let dishesQty = input[i];
    let plates = 0;
    let pots = 0;
    let count = 0;

    while (dishesQty !== "End") {
        dishesQty = Number(input[i]);
        count++;
        if (count === 3) {
            pots = pots + dishesQty;
            detergentQtyMl = detergentQtyMl - dishesQty * 15;
            count = 0;
        } else {
            plates = plates + dishesQty;
            detergentQtyMl = detergentQtyMl - dishesQty * 5;
        }

        if (detergentQtyMl < 0) {
            console.log(`Not enough detergent, ${Math.abs(detergentQtyMl)} ml. more necessary!`);
            break;
        }
        i++;
        dishesQty = input[i]
    }

    if (dishesQty === "End") {
        console.log('Detergent was enough!');
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergentQtyMl} ml.`);
    }
}

detergentForDishwasher

    // (["2",
    //     "53",
    //     "65",
    //     "55",
    //     "End"])


(["1",
"10",
"15",
"10",
"12",
"13",
"30"])
