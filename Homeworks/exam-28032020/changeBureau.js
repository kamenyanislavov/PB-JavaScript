function change(input) {

    let bitcoinNumber = Number(input[0]);
    let chinaYuan = Number(input[1]);
    let commision = Number(input[2]);

    let euro = 0;

    euro = ((bitcoinNumber * 1168 / 1.95) + (chinaYuan * 0.15 * 1.76 / 1.95)) * ((100 - commision) / 100);

    console.log(euro.toFixed(2));
}

change(["1",
    "5",
    "5"])
