function password(input) {
    let user = input[0];
    let password = input[1];

    let i = 2;
    let word = input[i];

while (word !== password) {

    i++
    word = input[i];
}
console.log(`Welcome ${user}!`);

}

password(["Nakov", "1234", "Pass", "1234"])
