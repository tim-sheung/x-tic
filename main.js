import { negamax } from "./tic-tac-toe/negamax.js";

const board = [
    [1, "[ ]", -1],
    ["[ ]", "[ ]", "[ ]"],
    [1, "[ ]", -1],
];
const [score, bestMove] = negamax(board, 7, 1, render);

function render(game) {
    const app = document.getElementById("app");
    app.innerHTML = "";
    game.forEach((row) => {
        const el = document.createElement("div");
        row.forEach((col) => {
            const inner = document.createElement("div");
            inner.classList.add("cell");
            const symbol = document.createElement("div");
            symbol.classList.add("symbol");
            symbol.classList.add(col === 1 ? "black" : col === -1 ? "white" : "");
            // symbol.innerHTML = col === 1 ? "X" : col === -1  ? "O" : "[ ]";
            inner.appendChild(symbol);
            el.appendChild(inner);
        });
        app.appendChild(el);
    });
}
