//  My JavaScript solution for the 2015 day 1 challenge from Advent of Code
//  https://adventofcode.com/2015/day/1

const { findFloor, findPosition } = require('./not-quite-lisp');
const fs = require('fs');

const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' });
console.log('part 1', findFloor(input));
console.log('part 2', findPosition(input, -1));