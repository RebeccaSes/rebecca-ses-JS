// const { readFileSync, read } = require('fs');
import { readFileSync } from 'fs';

const part1 = fs.readFileSync('./another.txt', 'utf8');
const part2 = readFileSync('./my-file.txt', 'utf8');
const part3 = readFileSync('./dir/this-other-file.txt', 'utf8');

const message = `${part1} !`;

console.log(message);
