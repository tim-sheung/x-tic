import { checkWinning } from "./evaluation";

const N = 3;

function negaMax(game, depth, color) {
    const currentState = checkWinning(game, N);
    const availableMoves = getAvailableMoves(game);
    if (depth === 0 || currentState !== 0) {
        
    }
}

export function getAvaiableMoves(game) {
    const moves = [];
    for (let i = 0; i < game.length; i++) {
        for (let j = 0; j < game.length; j++) {
            if (game[i][j] !== 0 && game[i][j] !== 1) {
                moves.push([i, j]);
            }
        }
    }
    return moves;
}

