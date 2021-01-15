import { checkConsecutive, checkWinning } from "./evaluation";

test("checkConsecutive", () => {
    let arr = [1, 1, 1];
    expect(checkConsecutive(arr, 3)).toBe(1);
    arr = [0, 0, 0];
    expect(checkConsecutive(arr, 3)).toBe(-1);
    arr = [1, 0, 1];
    expect(checkConsecutive(arr, 3)).toBe(0);
    arr = [0, 1, 1];
    expect(checkConsecutive(arr, 3)).toBe(0);
    arr = [0, 1, 0];
    expect(checkConsecutive(arr, 3)).toBe(0);
    arr = [1, 1, 0, 1];
    expect(checkConsecutive(arr, 3)).toBe(0);
    arr = [0, 1, 1, 1];
    expect(checkConsecutive(arr, 3)).toBe(1);
    arr = [0, 1, 0, 1];
    expect(checkConsecutive(arr, 3)).toBe(0);
    arr = [0, 1, 0, 0, 0];
    expect(checkConsecutive(arr, 3)).toBe(-1);
    arr = [0, 1, 0, 1, 1];
    expect(checkConsecutive(arr, 3)).toBe(0);
    arr = [1, 0, 1, 1, 1];
    expect(checkConsecutive(arr, 3)).toBe(1);
    arr = [1, 0, 0, 0, 1];
    expect(checkConsecutive(arr, 3)).toBe(-1);
    arr = [1, 0, 0, 0, 1];
    expect(checkConsecutive(arr, 4)).toBe(0);
    arr = [1, 1, 1, 1, 0];
    expect(checkConsecutive(arr, 4)).toBe(1);
    arr = [1, 1, 0, 0, 1, 0, 0, 0, 0];
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

    // horizontal
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
    put(0, 1, 0);
    put(0, 2, 1);
    put(1, 0, 1);
    put(1, 1, 0);
    put(1, 2, 1);
    expect(checkWinning(arr, 3)).toBe(0);
    put(2, 0, 0);
    put(2, 1, 0);
    put(2, 2, 0);
    expect(checkWinning(arr, 3)).toBe(-1);
    put(2, 0, 1);
    put(2, 1, 1);
    put(2, 2, 1);
    expect(checkWinning(arr, 3)).toBe(1);

    // vertical
    reset();
    put(0, 0, 1);
    put(1, 0, 1);
    put(2, 0, 1);
    expect(checkWinning(arr, 3)).toBe(1);
    reset();
    put(0, 0, 1);
    put(1, 0, 0);
    put(0, 1, 1);
    put(1, 1, 0);
    put(1, 2, 0);
    expect(checkWinning(arr, 3)).toBe(-1);
    reset();
    put(0, 2, 1);
    put(1, 2, 1);
    put(2, 2, 1);
    expect(checkWinning(arr, 3)).toBe(1);
    reset();
    put(1, 0, 0);
    put(1, 1, 0);
    put(1, 2, 0);
    expect(checkWinning(arr, 3)).toBe(-1);
    reset();
    put(0, 1, 0);
    put(0, 0, 1);
    put(1, 0, 1);
    put(2, 0, 1);
    expect(checkWinning(arr, 3)).toBe(1);
});
