function highJump(input) {

    let goalHight = Number(input[0]);
    let barHeight = goalHight - 30;
    let i = 1;
    // let jump = Number(input[i]);
    let jumps = 0;
    let fails = 0;

    while (barHeight <= goalHight) {
        let jump = Number(input[i]);

        if (jump > barHeight) {
            barHeight += 5;
            fails = 0;
        } else {
            fails += 1;
        }
        jumps++;

        if (fails === 3) {
            break;
        }

        i++;
        
    }

    if (fails === 3) {
        console.log(`Tihomir failed at ${barHeight}cm after ${[jumps]} jumps.`);
    } else {
        console.log(`Tihomir succeeded, he jumped over ${goalHight}cm after ${[jumps]} jumps.`);
    }
}

highJump(["231", "205", "212", "213", "228", "229", "230", "235"])