function oddEven(input) {

    let numbers = Number(input[0]);

    let oddSum = 0;
    let oddMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY;

    let evenSum = 0;
    let evenMin = Number.POSITIVE_INFINITY;
    let evenMax = Number.NEGATIVE_INFINITY;


    for (let i = 1; i < input.length; i++) {
        let num = Number(input[i]);

        if (i % 2 === 0) {
            evenSum += num;

            if (num < evenMin && num > evenMax) {
                evenMin = num;
                evenMax = num;
            } else if (num > evenMax) {
                evenMax = num;
            } else if (num < evenMin) {
                evenMin = num;
            }
        } else {
            oddSum += num;

            if (num < oddMin && num > oddMax) {
                oddMin = num;
                oddMax = num;
            } else if (num > oddMax) {
                oddMax = num;
            } else if (num < oddMin) {
                oddMin = num;
            }
        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);

    if (oddMin === Number.POSITIVE_INFINITY) {
        console.log("OddMin=No,");
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    }

    if (oddMax === Number.NEGATIVE_INFINITY) {
        console.log("OddMax=No,");    
    } else {
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);

    if (evenMin === Number.POSITIVE_INFINITY) {
        console.log("EvenMin=No,");    
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    }

    if (evenMax === Number.NEGATIVE_INFINITY) {
        console.log("EvenMax=No");    
    } else {
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}

oddEven(["2", "1.5", "-2.5"])