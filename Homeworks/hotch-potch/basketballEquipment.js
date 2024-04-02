


function basketballEquipment(input) {

    let annualFee = Number(input[0]);
    let sneakersPrice = annualFee - annualFee * 0.4;
    let outfitPrice = sneakersPrice - sneakersPrice * 0.2;
    let basketballPrice = outfitPrice * 0.25;
    let accessoriesPrice = basketballPrice * 0.2;

    let totalCost = annualFee + sneakersPrice + outfitPrice + basketballPrice + accessoriesPrice;

    console.log(totalCost);


}

basketballEquipment(["365 "])