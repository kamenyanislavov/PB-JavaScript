function donationSum(input) {
    let juniorsNumber = Number(input[0]);
    let seniorsNumber = Number(input[1]);
    let trackType = input[2];
    let totalEntryFees = 0;

    switch (trackType) {

        case "trail":
            totalEntryFees = juniorsNumber * 5.50 + seniorsNumber * 7.00;
            break;

        case "cross-country":
            if ((juniorsNumber + seniorsNumber) < 50) {
                totalEntryFees = juniorsNumber * 8.00 + seniorsNumber * 9.50;
            } else {
                totalEntryFees = (juniorsNumber * 8.00 + seniorsNumber * 9.50) * 0.75;
            }
            break;

        case "downhill":
            totalEntryFees = juniorsNumber * 12.25 + seniorsNumber * 13.75;
            break;

        case "road":
            totalEntryFees = juniorsNumber * 20.00 + seniorsNumber * 21.50;
            break;
    }

    let donation = totalEntryFees * 0.95;
    console.log(donation.toFixed(2));
}

donationSum(["21", "26", "cross-country"])