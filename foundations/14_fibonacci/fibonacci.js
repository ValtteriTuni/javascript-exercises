const fibonacci = function(number) {
    if (number < 0) {return "OOPS";}
    if (number === 0) {return 0;}
    if (number === 1) {return 1;}

    let fib = [0, 1];
    for (let i = 2; i <= number; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[number];
};

// Do not edit below this line
module.exports = fibonacci;
