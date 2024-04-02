function easterLunch(input) {

    let easterBreadQty = Number(input[0]);
    let eggDozensQty = Number(input[1]);
    let cookiesKg = Number(input[2]);

    let eggPaintPrice = eggDozensQty * 12 * 0.15;

    let easterLunchPrice = easterBreadQty * 3.20 + eggDozensQty * 4.35 + cookiesKg * 5.40 + eggPaintPrice;

    console.log(easterLunchPrice.toFixed(2));

}

easterLunch(["3", "2", "3"])
