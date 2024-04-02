function poolCondition(input) {
let poolVolume = input[0]; // volume is in liters
let debitPipe1 = input[1]; // liters
let debitPipe2 = input[2]; // liters
let hours = input[3]; // time worker is absent

let volumePipe1 = hours * debitPipe1;
let volumePipe2 = hours * debitPipe2;
let volumeWater = volumePipe1 + volumePipe2;

if (poolVolume >= volumeWater) {
    console.log(`The pool is ${(volumeWater / poolVolume * 100).toFixed(2)}% full. Pipe 1: ${(volumePipe1 / volumeWater * 100).toFixed(2)}%. Pipe 2: ${(volumePipe2 / volumeWater * 100).toFixed(2)}%.`);
} else {
    console.log(`For ${hours} hours the pool overflows with ${(volumeWater - poolVolume).toFixed(2)} liters.`);
}


}

poolCondition([100, 100, 100, 2.5])