function oscarsCeremony(input) {

    let hallRent = Number(input[0]);
    let statues = hallRent * 0.70;
    let cathering = statues * 0.85;
    let sound = cathering * 0.50;
    
    console.log((hallRent + statues + cathering + sound).toFixed(2));

}

oscarsCeremony(["3500"])