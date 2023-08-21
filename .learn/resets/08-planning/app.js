console.log("Hello World")

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3));

const fromEuroToDollar = (euros) => {
    let dollarValue = 1.2 
    let operator = dollarValue * euros
    return operator
}
console.log(fromEuroToDollar(3.5,1.2));



const fromDollarToYen = (dollar) => {
    let yenValue = 127.9 
    let operator = yenValue * euros
    return operator
}
console.log(fromDollarToYen(127.9,1.2));

module.exports = { fromDollarToYen,fromEuroToDollar,sum };
