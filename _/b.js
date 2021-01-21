function oneOrZero() {
    return Math.round(Math.random());
}

let one = 0;
let zero = 0;

const ones = [];
const zeros = [];

function test() {
    for (let i = 0; i < 1000; i++) {
        if (oneOrZero()) {
            one++;
        } else {
            zero++;
        }
    }
}

for (let i = 0; i < 1000; i++) {
    test();
    ones.push(one);
    zeros.push(zero);
    one = 0;
    zero = 0;
}

console.log(zeros.reduce((a, b) => a + b, 0) / zeros.length);
