function tournamentChristmas(input) {

    let days = Number(input.shift());

    let moneyRaised = 0;  // only for the given day
    let totalMoney = 0;  // for the whole tournament
    let winsCount = 0;  // for every separate day
    let losesCount = 0;  // for every separate day
    let daysWin = 0;  // += 1 if wins for the day are > loses
    let daysLose = 0;  // += 1 if loses for the day are more than wins

    
    for (let daysCount = 1; daysCount <= days; daysCount ++) {
        
        winsCount = 0;
        losesCount = 0;
        moneyRaised = 0;
        i = 0;
        let command = input.shift();
        i++;
        command = input.shift();

        if (command === "Finish") {
            daysCount++;
        }
        
        
        while (command !== "Finish") {
            let currentGame = command;
            
            if (currentGame === "win") {
                winsCount += 1;
                moneyRaised += 20;
            } else {
                losesCount += 1;
            }
            
            i += 1;
            command = input.shift();

            if (command !== 'win' && command !== 'lose' && command !== 'Finish') {
                i++;
                command = input.shift();
            }
            
        }

        if (winsCount > losesCount) {
            moneyRaised *= 1.10;
            totalMoney += moneyRaised;
            daysWin++;
        } else {
            totalMoney += moneyRaised;
            daysLose++;
        }
        
    }



    if (daysWin > daysLose) {
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }

}

tournamentChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])

