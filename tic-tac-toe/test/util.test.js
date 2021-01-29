import { getAvailableMoves } from "../util";

test("getAvailableMoves", () => {
    let games = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"],
    ];
    expect(getAvailableMoves(games)).toEqual([
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
        [1, -1, "-"],
        ["-", -1, "-"],
        ["-", "-", 1],
    ];
    expect(getAvailableMoves(games)).toEqual([
        [0, 2],
        [1, 0],
        [1, 2],
        [2, 0],
        [2, 1],
    ]);
});
