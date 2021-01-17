import { getAvaiableMoves } from "./negamax";

test("getAvaiableMoves", () => {
    let games = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"],
    ];
    expect(getAvaiableMoves(games)).toEqual([
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
    ]);
    games = [
        [1, 0, "-"],
        ["-", 0, "-"],
        ["-", "-", 1],
    ];
    expect(getAvaiableMoves(games)).toEqual([
        [0, 2],
        [1, 0],
        [1, 2],
        [2, 0],
        [2, 1],
    ]);
});
