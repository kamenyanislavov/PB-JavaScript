function triangleOfDollars(input) {

    let base = Number(input[0]);
    let collector = '';

    for (let rows = 1; rows <= base; rows++) {


        for (let columns = 1; columns <= rows; columns++) {
        }
        collector += "$ ";
        console.log(collector);
    }

}

triangleOfDollars(["5"])