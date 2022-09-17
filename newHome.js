function newHome(input) {

    let typeOfFlower = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let newPrice = 0;

    let rosesPrice = 5.00;
    let dahliasPrice = 3.80;
    let tulipsPrice = 2.80;
    let narcissusPrice = 3.00;
    let gladiolusPrice = 2.50;

    let totalPriceOfRoses = flowerCount * rosesPrice;
    let totalPriceOfDahlias = flowerCount * dahliasPrice;
    let totalPriceOfTulips = flowerCount * tulipsPrice;
    let totalPriceOfNarcissus = flowerCount * narcissusPrice;
    let totalPriceOfGladiolus = flowerCount * gladiolusPrice;

    switch (typeOfFlower) {
        case ("Roses"):
            if (flowerCount > 80) {
                newPrice = totalPriceOfRoses * 0.90;
            } else {
                newPrice = totalPriceOfRoses;
            }
            break;
        case ("Dahlias"):
            if (flowerCount > 90) {
                newPrice = totalPriceOfDahlias * 0.85;
            } else {
                newPrice = totalPriceOfDahlias;
            }
            break;
        case ("Tulips"):
            if (flowerCount > 80) {
                newPrice = totalPriceOfTulips * 0.85;
            } else {
                newPrice = totalPriceOfTulips;
            }
            break;
        case ("Narcissus"):
            if (flowerCount < 120) {
                newPrice = (totalPriceOfNarcissus * 0.15) + totalPriceOfNarcissus;
            } else {
                newPrice = totalPriceOfNarcissus;
            }
            break;
        case ("Gladiolus"):
            if (flowerCount < 80) {
                newPrice = (totalPriceOfGladiolus * 0.20) + totalPriceOfGladiolus;
            } else {
                newPrice = totalPriceOfGladiolus;
            }
            break;
    }
    let difference = Math.abs(budget - newPrice);

    if (newPrice <= budget) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${typeOfFlower} and ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`)
    }


}

