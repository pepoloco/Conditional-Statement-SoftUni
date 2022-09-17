function hotelRoom(input) {

    let month = input[0];
    let nightsCounter = Number(input[1]);
    let studio = 0;
    let apartment = 0;


    switch (month) {
        case ("May" || "October"):
            studio = 50.00;
            apartment = 65.00;
            if (nightsCounter > 7 && nightsCounter <= 14) {
                studio = studio * 0.95;
            } else if (nightsCounter > 14) {
                studio = studio * 0.70;
                apartment = apartment * 0.90;
            }
            break;
        case ("June" || "September"):
            studio = 75.20;
            apartment = 68.70;
            if (nightsCounter > 14) {
                studio = studio * 0.80;
                apartment = apartment * 0.90;
            }
            break;
        case ("July" && "August"):
            studio = 76.00;
            apartment = 77.00;
            if (nightsCounter > 14) {
                apartment = apartment * 0.90;
            }
            break;
    }
    console.log(`Apartment: ${(nightsCounter * apartment).toFixed(2)} lv.`);
    console.log(`Studio: ${(nightsCounter * studio).toFixed(2)} lv.`);

}
hotelRoom(["May",
    "15"]);
