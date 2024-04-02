function findBook(input) {

    let theBook = input[0];
    let i = 1;
    let currentBook = input[i];

    while (currentBook !== theBook) {
        
        if (currentBook === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${i-1} books.`);
        break;
        }

        i++
        currentBook = input[i];
    }
    if (currentBook === theBook) {
        console.log(`You checked ${i-1} books and found it.`);
}
    

}

findBook(["Troy", "Stronger", "Life Style", "Troy"])
