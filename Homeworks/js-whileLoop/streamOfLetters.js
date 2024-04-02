function streamOfLetters(input) {

    let i = 0;
    let letter = input[i];

    let cLetter = 0;
    let nLetter = 0;
    let oLetter = 0;
    let string = '';
    let result = '';

    while (letter !== "End") {

        if (letter.toLowerCase() === letter.toUpperCase()) {
            i++
            letter = input[i];
            continue;
        }

        if (cLetter === 1 && oLetter === 1 && nLetter === 1) {
            string += ' ';
            result += string;
            string = '';
            nLetter = 0;
            cLetter = 0;
            oLetter = 0;
        }

        if (letter === 'c' && cLetter === 0) {
            cLetter += 1;
            i++
            letter = input[i];
            if (letter === 'End') {
                result += string;
            }
            continue;
        }

        if (letter === 'n' && nLetter === 0) {
            nLetter += 1;
            i++
            letter = input[i];
            if (letter === 'End') {
                result += string;
            }
            continue;
        }

        if (letter === 'o' && oLetter === 0) {
            oLetter += 1;
            i++
            letter = input[i];
            if (letter === 'End') {
                result += string;
            }
            continue;
        }

        string += letter;


        i++;
        letter = input[i];
    }
    console.log(`${result}`);

}


streamOfLetters

    // (["H",
    //     "n",
    //     "e",
    //     "l",
    //     "l",
    //     "o",
    //     "o",
    //     "c",
    //     "t",
    //     "c",
    //     "h",
    //     "o",
    //     "e",
    //     "r",
    //     "e",
    //     "n",
    //     "e",
    //     "End"])


// (["%",
// "!",
// "c",
// "^",
// "B",
// "`",
// "o",
// "%",
// "o",
// "o",
// "M",
// ")",
// "{",
// "n",
// "\", 
// "A",
// "D",
// "End"])


(["o",
    "S",
    "%",
    "o",
    "l",
    "^",
    "v",
    "e",
    "c",
    "n",
    "&",
    "m",
    "e",
    "c",
    "o",
    "n",
    "End"])

