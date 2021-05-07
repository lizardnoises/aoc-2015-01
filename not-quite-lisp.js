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

// A return value of n >= 1 is the first position of the direction that lead
// to reaching the target floor. n === 0 means that the floor was reached
// without any directions (is the starting floor). n < 0 means the floor was
// never reached.
const findPosition = (directions, floor) => {
    let currentFloor = 0;
    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        if (direction === '(') {
            currentFloor += 1;
        } else if (direction === ')') {
            currentFloor -= 1;
        } else {
            throw new SyntaxError(`${direction} is not a valid direction`);
        }
        if (currentFloor === floor) {
            return i + 1;
        }
    }
    return -1;
};

const solution = (filename) => {
    const input = fs.readFileSync(filename, { encoding: 'utf-8' });
    console.log('part 1', findFloor(input));
    console.log('part 2', findPosition(input, -1));
};

solution('./input.txt');

exports.findFloor = findFloor;
exports.findPosition = findPosition;