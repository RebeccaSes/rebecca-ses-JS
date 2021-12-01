// 16
// import {readFileSync} from 'fs';

// fs = {readFileSync: () => {}, writeFileSync: () => {}}
const { writeFileSync } = require('fs');

writeFileSync('output1.txt', 'Invat node.js', 'utf8');
