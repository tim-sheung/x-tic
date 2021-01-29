import { checkConsecutive, checkWinning, getDiagonalsTLBR, getDiagonalsTRBL } from "../evaluation";

test("checkConsecutive", () => {
    let arr = [1, 1, 1];
    expect(checkConsecutive(arr, 3)).toBe(1);
    arr = [-1, -1, -1];
    expect(checkConsecutive(arr, 3)).toBe(-1);
    arr = [1, -1, 1];
    expect(checkConsecutive(arr, 3)).toBe(0);
    arr = [-1, 1, 1];
    expect(checkConsecutive(arr, 3)).toBe(0);
    arr = [-1, 1, -1];
    expect(checkConsecutive(arr, 3)).toBe(0);
    arr = [1, 1, -1, 1];
    expect(checkConsecutive(arr, 3)).toBe(0);
    arr = [-1, 1, 1, 1];
    expect(checkConsecutive(arr, 3)).toBe(1);
    arr = [-1, 1, -1, 1];
    expect(checkConsecutive(arr, 3)).toBe(0);
    arr = [-1, 1, -1, -1, -1];
    expect(checkConsecutive(arr, 3)).toBe(-1);
    arr = [-1, 1, -1, 1, 1];
    expect(checkConsecutive(arr, 3)).toBe(0);
    arr = [1, -1, 1, 1, 1];
    expect(checkConsecutive(arr, 3)).toBe(1);
    arr = [1, -1, -1, -1, 1];
    expect(checkConsecutive(arr, 3)).toBe(-1);
    arr = [1, -1, -1, -1, 1];
    expect(checkConsecutive(arr, 4)).toBe(0);
    arr = [1, 1, 1, 1, -1];
    expect(checkConsecutive(arr, 4)).toBe(1);
    arr = [1, 1, -1, -1, 1, -1, -1, -1, -1];
    expect(checkConsecutive(arr, 4)).toBe(-1);
});

test("checkWinning", () => {
    const arr = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"],
    ];
    const put = (row, col, color) => {
        arr[row][col] = color;
    };
    const reset = () => {
        arr.forEach((_) => {
            _.forEach((x, index) => (_[index] = "-"));
        });
    };

    // Horizontal
    expect(checkWinning(arr, 3)).toBe(0);
    put(0, 0, 1);
    expect(checkWinning(arr, 3)).toBe(0);
    put(0, 1, 1);
    expect(checkWinning(arr, 3)).toBe(0);
    put(0, 2, 1);
    expect(checkWinning(arr, 3)).toBe(1);
    reset();
    expect(checkWinning(arr, 3)).toBe(0);
    put(0, 0, 1);
    put(0, 1, -1);
    put(0, 2, 1);
    put(1, 0, 1);
    put(1, 1, -1);
    put(1, 2, 1);
    expect(checkWinning(arr, 3)).toBe(0);
    put(2, 0, -1);
    put(2, 1, -1);
    put(2, 2, -1);
    expect(checkWinning(arr, 3)).toBe(-1);
    put(2, 0, 1);
    put(2, 1, 1);
    put(2, 2, 1);
    expect(checkWinning(arr, 3)).toBe(1);

    // Vertical
    reset();
    put(0, 0, 1);
    put(1, 0, 1);
    put(2, 0, 1);
    expect(checkWinning(arr, 3)).toBe(1);
    reset();
    put(0, 0, 1);
    put(1, 0, -1);
    put(0, 1, 1);
    put(1, 1, -1);
    put(1, 2, -1);
    expect(checkWinning(arr, 3)).toBe(-1);
    reset();
    put(0, 2, 1);
    put(1, 2, 1);
    put(2, 2, 1);
    expect(checkWinning(arr, 3)).toBe(1);
    reset();
    put(1, 0, -1);
    put(1, 1, -1);
    put(1, 2, -1);
    expect(checkWinning(arr, 3)).toBe(-1);
    reset();
    put(0, 1, -1);
    put(0, 0, 1);
    put(1, 0, 1);
    put(2, 0, 1);
    expect(checkWinning(arr, 3)).toBe(1);

    // Diagonals - top-right to bottom-left
    reset();
    put(0, 0, 1);
    put(1, 1, 1);
    put(2, 2, -1);
    expect(checkWinning(arr, 3)).toBe(0);
    put(0, 2, 1);
    put(2, 0, 1);
    expect(checkWinning(arr, 3)).toBe(1);

    // Diagonals - top-left to bottom-right
    reset();
    put(0, 2, 1);
    put(1, 1, 1);
    put(2, 2, 1);
    expect(checkWinning(arr, 3)).toBe(0);
    put(0, 0, 1);
    expect(checkWinning(arr, 3)).toBe(1);
    reset();
    put(0, 2, 1);
    put(1, 1, -1);
    put(2, 2, -1);
    expect(checkWinning(arr, 3)).toBe(0);
    put(0, 0, -1);
    expect(checkWinning(arr, 3)).toBe(-1);
});

test("getDiagonalsTLBR", () => {
    let game = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
    ];
    expect(getDiagonalsTLBR(game, 5)).toEqual([[1, 7, 13, 19, 25]]);
    expect(getDiagonalsTLBR(game, 4)).toEqual([
        [1, 7, 13, 19, 25],
        [6, 12, 18, 24],
        [2, 8, 14, 20],
    ]);
    expect(getDiagonalsTLBR(game, 3)).toEqual([
        [1, 7, 13, 19, 25],
        [6, 12, 18, 24],
        [11, 17, 23],
        [2, 8, 14, 20],
        [3, 9, 15],
    ]);
    game = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
    ];
    expect(getDiagonalsTLBR(game, 4)).toEqual([[1, 6, 11, 16]]);
    expect(getDiagonalsTLBR(game, 3)).toEqual([
        [1, 6, 11, 16],
        [5, 10, 15],
        [2, 7, 12],
    ]);
    expect(getDiagonalsTLBR(game, 2)).toEqual([
        [1, 6, 11, 16],
        [5, 10, 15],
        [9, 14],
        [2, 7, 12],
        [3, 8],
    ]);
    game = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    expect(getDiagonalsTLBR(game, 3)).toEqual([[1, 5, 9]]);
    expect(getDiagonalsTLBR(game, 2)).toEqual([
        [1, 5, 9],
        [4, 8],
        [2, 6],
    ]);
});

test("getDiagonalsTRBL", () => {
    let game = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
    ];
    expect(getDiagonalsTRBL(game, 5)).toEqual([[5, 9, 13, 17, 21]]);
    expect(getDiagonalsTRBL(game, 4)).toEqual([
        [5, 9, 13, 17, 21],
        [10, 14, 18, 22],
        [4, 8, 12, 16],
    ]);
    expect(getDiagonalsTRBL(game, 3)).toEqual([
        [5, 9, 13, 17, 21],
        [10, 14, 18, 22],
        [15, 19, 23],
        [4, 8, 12, 16],
        [3, 7, 11],
    ]);
    game = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
    ];
    expect(getDiagonalsTRBL(game, 4)).toEqual([[4, 7, 10, 13]]);
    expect(getDiagonalsTRBL(game, 3)).toEqual([
        [4, 7, 10, 13],
        [8, 11, 14],
        [3, 6, 9],
    ]);
    expect(getDiagonalsTRBL(game, 2)).toEqual([
        [4, 7, 10, 13],
        [8, 11, 14],
        [12, 15],
        [3, 6, 9],
        [2, 5],
    ]);
    game = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    expect(getDiagonalsTRBL(game, 3)).toEqual([[3, 5, 7]]);
    expect(getDiagonalsTRBL(game, 2)).toEqual([
        [3, 5, 7],
        [6, 8],
        [2, 4],
    ]);
});
