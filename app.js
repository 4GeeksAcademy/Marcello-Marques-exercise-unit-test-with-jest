console.log("Hello World")

const sum = (a,b) => {
    return a + b
}
console.log(sum(14,9));

/*const fromEuroToDollar = (euros) => {
    let dollarValue = 1.2 
    let operator = dollarValue * euros
    return operator
}
console.log(fromEuroToDollar(3.5));*/

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
    }
    console.log(fromEuroToDollar(3.5));

const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
}
    console.log(fromDollarToYen(1.2))

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.8;
    return valueInPound;
}
console.log(fromYenToPound(127.9))

module.exports = {fromYenToPound,fromDollarToYen,fromEuroToDollar,sum };
