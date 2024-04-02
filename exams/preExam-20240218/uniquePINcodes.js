function uniquePinCodes(input) {

    let digit1Upperlimit = Number(input[0]);
    let digit2UpperLimit = Number(input[1]);
    let digit3UpperLimit = Number(input[2]);

    for (let first = 1; first <= digit1Upperlimit; first++) {

        if (first % 2 !== 0) {
            continue;
        }
        for (let second = 2; second <= digit2UpperLimit; second++) {
            
            if (second > 2 && second % 2 === 0) {
                continue;
            }
            if (second > 7) {
                break;
            }
    
            for (let third = 1; third <= digit3UpperLimit; third++) {
    
                if (third % 2 !== 0) {
                    continue;
                }
    
                console.log(`${first} ${second} ${third}`);
            }
        }
    }

}

uniquePinCodes(["8",
    "2",
    "8"])
