function textRead(input) {
let i = 0;
let word = input[i];

while (word !== "Stop") {

    console.log(word);
    i++
    word = input[i];
}

}

textRead(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"])
