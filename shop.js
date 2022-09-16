function shop(input) {

    let product = input[0]; // produkt
    let town = input[1]; // grad
    let quantity = Number(input[2]); // kolichestvo
    let total = 0;

    if (town === "Sofia") {
        switch (product) {
            case ("coffee"):
                total = quantity * 0.50;
                break;
            case ("water"):
                total = quantity * 0.80;
                break;
            case ("beer"):
                total = quantity * 1.20;
                break;
            case ("sweets"):
                total = quantity * 1.45;
                break;
            case ("peanuts"):
                total = quantity * 1.60;
                break;
        }
    } else if (town === "Plovdiv") {
        switch (product) {
            case ("coffee"):
                total = quantity * 0.40;
                break;
            case ("water"):
                total = quantity * 0.70;
                break;
            case ("beer"):
                total = quantity * 1.15;
                break;
            case ("sweets"):
                total = quantity * 1.30;
                break;
            case ("peanuts"):
                total = quantity * 1.50;
                break;

        }

    } else if (town === "Varna") {
        switch (product) {
            case ("coffee"):
                total = quantity * 0.45;
                break;
            case ("water"):
                total = quantity * 0.70;
                break;
            case ("beer"):
                total = quantity * 1.10;
                break;
            case ("sweets"):
                total = quantity * 1.35;
                break;
            case ("peanuts"):
                total = quantity * 1.55;
                break;

        }
    }
    console.log(total);
}


shop(["coffee", "Varna", "2"]);
