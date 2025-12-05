
function pairNumbers(number1, number2) {
    let pairs = "";
    for (let i = number1; i <= number2; i++) {
        if (i % 2 === 0) {
            pairs += i + ",";
        }
    }
    return pairs.slice(0, -1);
}

export default pairNumbers
