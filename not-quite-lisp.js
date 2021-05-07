//  My JavaScript solution for the 2015 day 1 challenge from Advent of Code
//  https://adventofcode.com/2015/day/1

import fs from 'fs';

const findFloor = (directions) => {
    return directions.split('').reduce((floor, direction) => {
        if (direction === '(') {
            return floor + 1;
        } else if (direction === ')') {
            return floor - 1;
        } else {
            throw new SyntaxError(`${direction} is not a valid direction`);
        }
    }, 0);
};

const solution = (filename) => {
    const input = fs.readFileSync(filename, { encoding: 'utf-8' });
    console.log(findFloor(input));
};

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
    console.log(input, findFloor(input), expected);
});

solution('./input.txt');