function hospital(input) {
    let period = Number(input[0]);

    let doctors = 7;
    let patientsChecked = 0;
    let patientsSentAway = 0;

    for (let i = 1; i < input.length; i++) {
        let patientsCurrDay = Number(input[i]);
        if (i % 3 === 0 && patientsChecked < patientsSentAway) {
            doctors += 1;
        }
        if (patientsCurrDay <= doctors) {
            patientsChecked = patientsChecked + patientsCurrDay;
        } else {
            patientsChecked = patientsChecked + doctors;
            patientsSentAway = patientsSentAway + patientsCurrDay - doctors;
        }
    }
    console.log(`Treated patients: ${patientsChecked}.`);
    console.log(`Untreated patients: ${patientsSentAway}.`);
}

hospital(["6", "25", "25", "25", "25", "25", "2"])