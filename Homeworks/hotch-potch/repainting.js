
function repainting(input) {

    let nylonQty = Number(input[0]);
    let paintQty = Number(input[1]);
    let thinnerQty = Number(input[2]);
    let workHours = Number(input[3]);
    
    let nylonCost = (nylonQty + 2) * 1.50;
    let paintCost = (paintQty + (paintQty * 0.1)) * 14.50;
    let thinnerCost = thinnerQty * 5.00;
    let materialCost = nylonCost + paintCost + thinnerCost + 0.40;

    let labourCost = workHours * (materialCost * 0.3);

    let totalCost = materialCost + labourCost;

    console.log(totalCost);
    
}

repainting(["10 ", "11 ", "4 ", "8 "])