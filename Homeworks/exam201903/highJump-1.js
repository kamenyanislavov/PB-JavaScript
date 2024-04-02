function highJump1(input) {

    let goalHight = Number(input[0]);
    let barHeight = goalHight - 30;
    let i = 1;
    let jump = Number(input[i]);
    let fails = 0;

    while (jump <= goalHight) {
        
        if (jump <= barHeight) {
            fails += 1;
        }
        if (jump > barHeight) {
            barHeight += 5;
            fails = 0;
        }
        if (fails > 2) {
            console.log(`Tihomir failed at ${barHeight}cm after ${[i]} jumps.`);
            break;
        }
        
        i++
        jump = Number(input[i]);
        
    }
    if (jump > goalHight) {
        console.log(`Tihomir succeeded, he jumped over ${goalHight}cm after ${i} jumps.`);
    }
}

highJump1(["231", "205", "212", "213", "228", "229", "230", "235"])