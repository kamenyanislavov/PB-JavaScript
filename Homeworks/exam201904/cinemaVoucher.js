function cinemaVoucher(input) {

    let voucherSum = Number(input[0]);

    let i = 1;
    let command = input[i];
    let price = 0;
    let ticketsCount = 0;
    let otherCount = 0;

    while (command !== "End") {

        if (command.length > 8) {
            price = (command.charCodeAt(0) + command.charCodeAt(1));
            if (voucherSum >= price) {
                voucherSum -= price;
                ticketsCount++;
            } else {
                break;
            }
        } else if (command.length <= 8) {
            price = command.charCodeAt(0);
            if (voucherSum >= price) {
                voucherSum -= price;
                otherCount++;
            } else {
                break;
            }
        }

        i++;
        command = input[i];
    }

    console.log(ticketsCount);
    console.log(otherCount);
}

cinemaVoucher(["300", "Captain Marvel", "popcorn", "Pepsi", "End"])
