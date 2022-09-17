function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermansCount = Number(input[2]);

    let priceForSpring = 3000;
    let priceForSummerAndAutumn = 4200;
    let priceForWinter = 2600;

    let sum = 0;

    switch (season) {
        case ("Spring"):
            if (fishermansCount <= 6) {
                sum = priceForSpring * 0.90;
            } else if (fishermansCount >= 7 && fishermansCount <= 11) {
                sum = priceForSpring * 0.85;
            } else {
                sum = priceForSpring * 0.75;
            }
            break;
        case ("Summer"):
            if (fishermansCount <= 6) {
                sum = priceForSummerAndAutumn * 0.90;
            } else if (fishermansCount >= 7 && fishermansCount <= 11) {
                sum = priceForSummerAndAutumn * 0.85;
            } else {
                sum = priceForSummerAndAutumn * 0.75;
            }
            break;
        case ("Autumn"):
            if (fishermansCount <= 6) {
                sum = priceForSummerAndAutumn * 0.90;
            } else if (fishermansCount >= 7 && fishermansCount <= 11) {
                sum = priceForSummerAndAutumn * 0.85;
            } else {
                sum = priceForSummerAndAutumn * 0.75;
            }
            break;
        case ("Winter"):
            if (fishermansCount <= 6) {
                sum = priceForWinter * 0.90;
            } else if (fishermansCount >= 7 && fishermansCount <= 11) {
                sum = priceForWinter * 0.85;
            } else {
                sum = priceForWinter * 0.75;
            }
            break;
    }
    if (fishermansCount % 2 === 0 && season !== "Autumn") {
        sum = (sum * 0.05) - sum;
    }
    let difference = Math.abs(sum - budget);

    if (sum <= budget) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
    }

}
fishingBoat();
