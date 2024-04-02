function salaryLeft(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    for (i = 2; i <= tabs + 2; i++) {
      let currTab = input[i]; 
        switch (currTab) {
            case "Facebook":
                salary-= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break
            }
        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
    }else {
        console.log(salary);
    }   
}

salaryLeft(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])
