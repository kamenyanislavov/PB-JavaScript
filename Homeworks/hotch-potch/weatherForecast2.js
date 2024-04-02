function weatherInformation(input){
let celsius = input[0];

if(celsius >= 26.00 && celsius <= 35.00){
    console.log("Hot");
} else if(celsius >= 20.1 && celsius < 26.00){
    console.log("Warm");
} else if(celsius >= 15.00 && celsius <= 20.00){
    console.log("Mild");
} else if(celsius >= 12.00 && celsius < 15.00){
    console.log("Cool");
} else if(celsius >= 5.00 && celsius < 12.00){
    console.log("Cold");
} else {
    console.log("unknown");
}
}

weatherInformation([30])