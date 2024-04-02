function lettersCombination(input) {

    let startLetter = input[0].charCodeAt();
    let endLetter = input[1].charCodeAt();
    let skipLetter = input[2].charCodeAt(); //skip combinations with this letter

    let result = '';
    let counter = 0;

    for (let i = startLetter; i <= endLetter; i++) {

        if (i === skipLetter) {
            continue;
        }

        for (let j = startLetter; j <= endLetter; j++) {

            if (j === skipLetter) {
                continue;
            }

            for (let k = startLetter; k <= endLetter; k++) {

                if (k === skipLetter) {
                    continue;
                }

                result += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + " ";
                counter++;

            }
        }
    }
    console.log(`${result}${counter}`);
}

lettersCombination(["a", "k", "c"])