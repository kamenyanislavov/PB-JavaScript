
function schoolSupplies(input) {

    let penPackages = Number(input[0]);
    let markerPackages = Number(input[1]);
    let detergentLittres = Number(input[2]);
    let discount = Number(input[3] / 100);

    let totalBill = penPackages * 5.80 + markerPackages * 7.20 + detergentLittres * 1.20;
    let finalBill = totalBill - (totalBill * discount);

    console.log(finalBill);

}

schoolSupplies(["2 ", "3 ", "4 ", "25 "])