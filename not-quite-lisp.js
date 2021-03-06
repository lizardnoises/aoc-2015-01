// My JavaScript implementation for the 2015 day 1 challenge from
// Advent of Code (https://adventofcode.com/2015/day/1)

const fs = require('fs');

const parseDirection = (floor, direction) => {
    if (direction === '(') {
        return floor + 1;
    } else if (direction === ')') {
        return floor - 1;
    } else {
        throw new SyntaxError(`${direction} is not a valid direction`);
    }
};

// Return the floor reached after parsing the directions string. The starting
// floor is 0. '(' means go up a floor and ')' means go down a floor.
const findFloor = (directions) => {
    return directions.split('').reduce(parseDirection, 0);
};

// A return value of n >= 1 is the first position of the direction that leads
// to reaching the target floor. n === 0 means that the floor is reached
// without any directions (is the starting floor). n < 0 means the floor is
// never reached.
const findPosition = (directions, floor) => {
    let currentFloor = 0;
    let position = 0;
    if (directions.split('').some((direction) => {
        currentFloor = parseDirection(currentFloor, direction);
        position++;
        return currentFloor === floor;
    })) {
        return position;
    }
    return -1;
};

exports.findFloor = findFloor;
exports.findPosition = findPosition;