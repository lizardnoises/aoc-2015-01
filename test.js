const { findFloor } = require('./not-quite-lisp');

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
    test(`findFloor parses ${input} to floor(${expected})`, () => {
        expect(findFloor(input)).toBe(expected);
    });
});