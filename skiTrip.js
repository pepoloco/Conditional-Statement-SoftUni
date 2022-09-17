function skiTrip(input) {

    let days = Number(input[0]);
    let typeOfTheRoom = input[1];
    let scoreOfTheStay = input[2];

    let priceForApt = 25.00;
    let priceForPresidentApt = 35.00;
    let priceForOneRoomPerson = 18.00;

    let sum = 0;

    switch (typeOfTheRoom) {
        case ("room for one person"):
            sum = (days - 1) * priceForOneRoomPerson;
            break;
        case ("apartment"):
            sum = (days - 1) * priceForApt;
            if (days < 10) {
                sum = sum * 0.70;
            } else if (days >= 10 && days <= 15) {
                sum = sum * 0.65;
            } else {
                sum = sum * 0.50;
            }
            break;
        case ("president apartment"):
            sum = (days - 1) * priceForPresidentApt;
            if (days < 10) {
                sum = sum * 0.90;
            } else if (days >= 10 && days <= 15) {
                sum = sum * 0.85;
            } else {
                sum = sum * 0.80;
            }
            break;
    }

    if (scoreOfTheStay === "positive") {
        sum = sum * 0.25 + sum;
    } else {
        sum = sum * 0.90;
    }
    console.log(sum.toFixed(2));
}
skiTrip(["2",
    "apartment",
    "positive"])
