import { checkWinning } from "./evaluation.js";
import { move, getAvailableMoves, undo, printGame } from "./util.js";

const N = 3;
export let count = 0;

/**
 * @returns [score, bestMove]
 */
export function negamax(game, depth, color, render) {
    count++;
    if (render) {
        const copiedGame = JSON.parse(JSON.stringify(game));
        setTimeout(() => {
            render(copiedGame);
        }, count * 1000);
    }
    const currentState = checkWinning(game, N);
    const availableMoves = getAvailableMoves(game);
    if (depth === 0 || currentState !== 0 || availableMoves.length === 0) {
        return [currentState * color, null];
    }
    let score = -Infinity;
    let bestMove;
    for (const _ of availableMoves) {
        move(game, _[0], _[1], color);
        let current = -negamax(game, depth - 1, -color, render)[0];
        if (current > score) {
            score = current;
            bestMove = _;
        }
        undo(game, _[0], _[1]);
    }
    return [score, bestMove];
}
