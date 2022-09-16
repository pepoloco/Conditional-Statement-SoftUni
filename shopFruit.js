function fruitVegetable(input) {

    let product = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (product) {
            case ("banana"): price = quantity * 2.50; console.log((price).toFixed(2)); break;
            case ("apple"): price = quantity * 1.20; console.log((price).toFixed(2)); break;
            case ("orange"): price = quantity * 0.85; console.log((price).toFixed(2)); break;
            case ("grapefruit"): price = quantity * 1.45; console.log((price).toFixed(2)); break;
            case ("kiwi"): price = quantity * 2.70; console.log((price).toFixed(2)); break;
            case ("pineapple"): price = quantity * 5.50; console.log((price).toFixed(2)); break;
            case ("grapes"): price = quantity * 3.85; console.log((price).toFixed(2)); break;
            default: console.log("error");
                break;
        }
    } else if (day === "Saturday" || day === "Sunday") {
        switch (product) {
            case ("banana"): price = quantity * 2.70; console.log((price).toFixed(2)); break;
            case ("apple"): price = quantity * 1.25; console.log((price).toFixed(2)); break;
            case ("orange"): price = quantity * 0.90; console.log((price).toFixed(2)); break;
            case ("grapefruit"): price = quantity * 1.60; console.log((price).toFixed(2)); break;
            case ("kiwi"): price = quantity * 3.00; console.log((price).toFixed(2)); break;
            case ("pineapple"): price = quantity * 5.60; console.log((price).toFixed(2)); break;
            case ("grapes"): price = quantity * 4.20; console.log((price).toFixed(2)); break;
            default: console.log("error");
                break;
        }
    } else {
        console.log("error");
    }
}
fruitVegetable(["tomato",
    "Monday",
    "0.5"])

