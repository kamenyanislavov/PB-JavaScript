function campHotelPriceAndSport(input) {
    let season = input[0];
    let groupType = input[1];
    let pupilNumber = Number(input[2]);
    let numberOfNights = Number(input[3]);
    let sportType = '';
    let hotelPrice = 0;

    switch (season) {
        case "Winter":
            switch (groupType) {
                case "boys":
                    sportType = "Judo";
                    break;

                case "girls":
                    sportType = "Gymnastics";
                    break;

                case "mixed":
                    sportType = "Ski";
                    break;
            }
            break;

        case "Spring":
            switch (groupType) {
                case "boys":
                    sportType = "Tennis";
                    break;

                case "girls":
                    sportType = "Athletics";
                    break;

                case "mixed":
                    sportType = "Cycling";
                    break;
            }
            break;

        case "Summer":
            switch (groupType) {
                case "boys":
                    sportType = "Football";
                    break;

                case "girls":
                    sportType = "Volleyball";
                    break;

                case "mixed":
                    sportType = "Swimming";
                    break;
            }
            break;
    }
    if (pupilNumber >= 10 && pupilNumber < 20) {
        if (groupType === "mixed") {
            switch (season) {
                case "Winter":
                    hotelPrice = pupilNumber * numberOfNights * 10.00 * 0.95; break;
                case "Spring":
                    hotelPrice = pupilNumber * numberOfNights * 9.50 * 0.95; break;
                case "Summer":
                    hotelPrice = pupilNumber * numberOfNights * 20.00 * 0.95; break;
            }
        } else {
            switch (season) {
                case "Winter":
                    hotelPrice = pupilNumber * numberOfNights * 9.60 * 0.95; break;
                case "Spring":
                    hotelPrice = pupilNumber * numberOfNights * 7.20 * 0.95; break;
                case "Summer":
                    hotelPrice = pupilNumber * numberOfNights * 15.00 * 0.95; break;
            }
        }
    } else if (pupilNumber >= 20 && pupilNumber < 50) {
        if (groupType === "mixed") {
            switch (season) {
                case "Winter":
                    hotelPrice = pupilNumber * numberOfNights * 10.00 * 0.85; break;
                case "Spring":
                    hotelPrice = pupilNumber * numberOfNights * 9.50 * 0.85; break;
                case "Summer":
                    hotelPrice = pupilNumber * numberOfNights * 20.00 * 0.85; break;
            }
        } else {
            switch (season) {
                case "Winter":
                    hotelPrice = pupilNumber * numberOfNights * 9.60 * 0.85; break;
                case "Spring":
                    hotelPrice = pupilNumber * numberOfNights * 7.20 * 0.85; break;
                case "Summer":
                    hotelPrice = pupilNumber * numberOfNights * 15.00 * 0.85; break;
            }
        }
    } else if (pupilNumber >= 50) {
        if (groupType === "mixed") {
            switch (season) {
                case "Winter":
                    hotelPrice = pupilNumber * numberOfNights * 10.00 * 0.50; break;
                case "Spring":
                    hotelPrice = pupilNumber * numberOfNights * 9.50 * 0.50; break;
                case "Summer":
                    hotelPrice = pupilNumber * numberOfNights * 20.00 * 0.50; break;
            }
        } else {
            switch (season) {
                case "Winter":
                    hotelPrice = pupilNumber * numberOfNights * 9.60 * 0.50; break;
                case "Spring":
                    hotelPrice = pupilNumber * numberOfNights * 7.20 * 0.50; break;
                case "Summer":
                    hotelPrice = pupilNumber * numberOfNights * 15.00 * 0.50; break;
            }
        }
    } else {
        if (groupType === "mixed") {
            switch (season) {
                case "Winter":
                    hotelPrice = pupilNumber * numberOfNights * 10.00; break;
                case "Spring":
                    hotelPrice = pupilNumber * numberOfNights * 9.50; break;
                case "Summer":
                    hotelPrice = pupilNumber * numberOfNights * 20.00; break;
            }
        } else {
            switch (season) {
                case "Winter":
                    hotelPrice = pupilNumber * numberOfNights * 9.60; break;
                case "Spring":
                    hotelPrice = pupilNumber * numberOfNights * 7.20; break;
                case "Summer":
                    hotelPrice = pupilNumber * numberOfNights * 15.00; break;
            }
        }
    }
    console.log(`${sportType} ${hotelPrice.toFixed(2)} lv.`);
}

campHotelPriceAndSport(["Spring", "girls", "20", "7"])