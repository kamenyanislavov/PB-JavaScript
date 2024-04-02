function powerfulWord(input) {

    let i = 0;
    let word = input[i];

    let power = 0;
    let maxPower = 0;
    let maxPowerWord = "";

    while (word !== "End of words") {

        power = 0;
        for (let l = 0; l < word.length; l++) {

            let ascii = word.charCodeAt(l);

            power += ascii;
        }

        if (word[0] === "i" || word[0] === "I" ||
            word[0] === "o" || word[0] === "O" ||
            word[0] === "e" || word[0] === "E" ||
            word[0] === "a" || word[0] === "A" ||
            word[0] === "u" || word[0] === "U" ||
            word[0] === "y" || word[0] === "Y") {
            power *= word.length;
        } else {
            power /= Math.floor(word.length);
        }

        if (power > maxPower) {
            maxPower = power;
            maxPowerWord = word;
        }

        word = input[i];
        i++
    }
    console.log(`The most powerful word is ${maxPowerWord} - ${maxPower}`);
}

powerfulWord(["The",
    "Most",
    "Powerful",
    "Word",
    "Is",
    "Experience",
    "End of words"])
