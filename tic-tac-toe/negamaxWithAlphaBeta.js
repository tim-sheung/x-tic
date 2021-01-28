import { checkWinning } from "./evaluation.js";
import { move, getAvailableMoves, undo, printGame } from "./util.js";

const N = 3;
export let count = 0;

/**
 * @returns [score, bestMove]
 */
export function negamaxWithAlphaBeta(game, depth, alpha, beta, color) {
    count++;
    const currentState = checkWinning(game, N);
    const availableMoves = getAvailableMoves(game);
    if (depth === 0 || currentState !== 0 || availableMoves.length === 0) {
        // printGame(game, currentState * color, color);
        return [currentState * color, null];
    }
    let score = -Infinity;
    let bestMove;
    for (const _ of availableMoves) {
        move(game, _[0], _[1], color);
        let current = -negamaxWithAlphaBeta(game, depth - 1, -1 * beta, -1 * alpha, -1 * color)[0];
        if (current > score) {
            score = current;
            bestMove = _;
        }
        if (score > alpha) {
            alpha = score;
        }
        undo(game, _[0], _[1]);
        if (alpha >= beta) {
            return [alpha, _];
        }
    }
    // printGame(game, score, color);
    return [score, bestMove];
}
