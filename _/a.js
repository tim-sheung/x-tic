function randomNumber(n) {
    return Math.floor(Math.random() * n) + 1;
}

const box = {};
const put = [];

while (true) {
    const _ = randomNumber(100);
    if (!put.includes(_)) {
        box[put.length + 1] = _;
        put.push(_);
    }
    if (put.length === 100) break;
}

let total_randomPick = 0;
let found_randomPick = 0;

function randomPick() {
    const n = randomNumber(100);
    const opened = [];
    for (let i = 0; i < 50; i++) {
        let _ = randomNumber(100);
        while (opened.includes(_)) {
            _ = randomNumber(100);
        }
        if (_ === n) {
            found_randomPick++;
            break;
        } else {
            opened.push(_);
        }
    }
}

for (let i = 0; i < 1000000; i++) {
    total_randomPick++;
    randomPick();
}

let total_orderPick = 0;
let found_orderPick = 0;

function orderPick() {
    // console.log("box: ", box);
    const n = randomNumber(100);
    const opened = [];
    let cur = 1;
    for (let i = 0; i < 50; i++) {
        while (opened.includes(cur)) {
            cur = randomNumber(100);
        }
        // console.log("cur: ", cur, "object: ", n);
        if (box[cur] === n) {
            found_orderPick++;
            break;
        } else {
            opened.push(cur);
            cur = box[cur];
        }
    }
}

console.log(total_randomPick - found_randomPick, total_randomPick);

for (let i = 0; i < 1000000; i++) {
    total_orderPick++;
    orderPick();
}

console.log(total_orderPick - found_orderPick, total_orderPick);
