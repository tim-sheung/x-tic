import { negamax } from "./tic-tac-toe/negamax.js";

const game = [
    [1, "[ ]", -1],
    ["[ ]", "[ ]", "[ ]"],
    [1, "[ ]", -1],
];
const [score, bestMove] = negamax(game, 7, 1, render);

function render(game) {
    game.forEach((row) => {
        const el = document.createElement("div");
        row.forEach((col) => {
            const inner = document.createElement("span");
            inner.innerHTML = col;
            el.appendChild(inner);
        });
        document.body.appendChild(el);
    });
}