//  My JavaScript solution for the 2015 day 1 challenge from Advent of Code
//  https://adventofcode.com/2015/day/1

const fs = require('fs');

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

solution('./input.txt');

exports.findFloor = findFloor;