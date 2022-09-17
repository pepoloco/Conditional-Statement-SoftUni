function operationBetweenNumbers(input) {

    let numOne = Number(input[0]);
    let numTwo = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let oddOrEven = "";



    switch (operator) {
        case ("+"):
            result = numOne + numTwo;
            if (result % 2 === 0) {
                oddOrEven = "even";
            } else {
                oddOrEven = "odd";
            }
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${oddOrEven}`);
            break;
        case ("-"):
            result = numOne - numTwo;
            if (result % 2 === 0) {
                oddOrEven = "even";
            } else {
                oddOrEven = "odd";
            }
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${oddOrEven}`);
            break;
        case ("*"):
            result = numOne * numTwo;
            if (result % 2 === 0) {
                oddOrEven = "even";
            } else {
                oddOrEven = "odd";
            }
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${oddOrEven}`);
            break;
        case ("/"):
            if (numTwo === 0) {
                console.log(`Cannot divide ${numOne} by zero`);
                break;
            }
            result = numOne / numTwo;
            console.log(`${numOne} ${operator} ${numTwo} = ${result.toFixed(2)}`);
            break;
        case ("%"):
            if (numTwo === 0) {
                console.log(`Cannot divide ${numOne} by zero`);
                break;
            }
            result = numOne % numTwo;
            console.log(`${numOne} ${operator} ${numTwo} = ${result}`);
            break;
    }

}
operationBetweenNumbers();