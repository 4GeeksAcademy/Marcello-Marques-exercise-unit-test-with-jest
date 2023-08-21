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







module.exports = {fromEuroToDollar,sum };
