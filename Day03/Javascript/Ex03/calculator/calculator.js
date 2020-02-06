//Function Definitions

function read(...args) {
    let isNaN = (maybeNaN) => maybeNaN != maybeNaN;
    this.args = []
    //handle strings
    for (let value of args) {
        //try catch
        if (isNaN(parseInt(value,10))) {
            throw new TypeError("not a number")
        } else {
            this.args.push(parseInt(value, 10));

        }
    }
}

function sum() {
    let sumtotal = 0;

    for (let value of this.args) {
        sumtotal += value;
    }
    return sumtotal
}

function mul() {
    let sumtotal = 1;

    for (let value of this.args) {
        sumtotal *= value;
    }
    return sumtotal
}

//Ablaufcode

let calculator = {};

//init
calculator.args = [];


calculator.read = read;
calculator.sum = sum;
calculator.mul = mul;


module.exports = calculator;


