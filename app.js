const fs = require('fs');

var readMe = fs.readFileSync('planets.txt', 'utf8')

console.log(readMe);