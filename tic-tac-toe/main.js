import { negamax, count } from "./negamax.js";
import { negamaxWithAlphaBeta, count as countAlphaBeta } from "./negamaxWithAlphaBeta.js";

/**
 * Board representation
 * 1 = black
 * -1 = white
 */

function main() {
    const game = [
        [1, "[ ]", -1],
        ["[ ]", "[ ]", "[ ]"],
        [1, "[ ]", -1],
    ];
    const [score, bestMove] = negamax(game, 7, 1);
    console.log("best move: ", bestMove, " score: ", score);
    console.log("Total nodes searched:", count);

    const [scoreAlphaBeta, bestMoveAlphaBeta] = negamaxWithAlphaBeta(game, 7, -1 * Infinity, Infinity, 1);
    console.log("best move from alpha beta: ", bestMoveAlphaBeta, " score from alpha beta: ", scoreAlphaBeta);
    console.log("Total nodes searched from alpha beta:", countAlphaBeta);
}

main();
