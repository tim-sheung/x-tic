const map = {};
map[1] = "I";
map[5] = "V";
map[10] = "X";
map[50] = "L";
map[100] = "C";
map[500] = "D";
map[1000] = "M";

function f(n) {
    let d;
    for (let i = 1; i <= 1000; i = i * 10) {
        if (n / i < 10) {
            d = i;
            break;
        }
    }
    const str = [];
    const leadDigit = Math.floor(n / d);
    if (leadDigit < 4) {
        for (let i = 0; i < leadDigit; i++) {
            str.push(map[d]);
        }
    } else if (leadDigit === 4) {
        str.push(map[d]);
        str.push(map[d * 5]);
    } else if (leadDigit === 9) {
        str.push(map[d]);
        str.push(map[d * 10]);
    } else {
        str.push(map[d * 5]);
        for (let i = 0; i < leadDigit - 5; i++) {
            str.push(map[d]);
        }
    }
    if (n - leadDigit * d > 0) {
        const next = f(n - leadDigit * d);
        str.push(...next);
    }
    return str;
}

console.log(f(14).join(""));
