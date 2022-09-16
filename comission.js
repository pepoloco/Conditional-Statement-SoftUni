function commision(input) {

    let town = input[0]; //grad
    let sales = Number(input[1]); // prodajbi
    let c = 0;

    if (0 <= sales && sales <= 500) {
        switch (town) {
            case ("Sofia"): c = sales * 0.05; console.log((c).toFixed(2)); break;
            case ("Varna"): c = sales * 0.045; console.log((c).toFixed(2)); break;
            case ("Plovdiv"): c = sales * 0.055; console.log((c).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (500 < sales && sales <= 1000) {
        switch (town) {
            case ("Sofia"): c = sales * 0.07; console.log((c).toFixed(2)); break;
            case ("Varna"): c = sales * 0.075; console.log((c).toFixed(2)); break;
            case ("Plovdiv"): c = sales * 0.08; console.log((c).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (1000 < sales && sales <= 10000) {
        switch (town) {
            case ("Sofia"): c = sales * 0.08; console.log((c).toFixed(2)); break;
            case ("Varna"): c = sales * 0.1; console.log((c).toFixed(2)); break;
            case ("Plovdiv"): c = sales * 0.12; console.log((c).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (sales > 10000) {
        switch (town) {
            case ("Sofia"): c = sales * 0.12; console.log(c.toFixed(2)); break;
            case ("Varna"): c = sales * 0.13; console.log(c.toFixed(2)); break;
            case ("Plovdiv"): c = sales * 0.145; console.log(c.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }
}
commision(["Sofia", "1500"]);