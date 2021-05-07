const { findFloor, findPosition } = require('./not-quite-lisp');

[
    ['(())', 0],
    ['()()', 0],
    ['(((', 3],
    ['(()(()(', 3],
    ['())', -1],
    ['))(', -1],
    [')))', -3],
    [')())())', -3],
].map(([input, expected]) => {
    test(`findFloor parses ${input} to floor ${expected}`, () => {
        expect(findFloor(input)).toBe(expected);
    });
});

[
    [')', -1, 1],
    ['()())', -1, 5],
].map(([input, floor, expected]) => {
    test(`findPosition parses ${input} for floor ${floor} to ${expected}`, () => {
        expect(findPosition(input, floor)).toBe(expected);
    });
});