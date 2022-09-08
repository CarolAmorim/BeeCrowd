// 1930	- Tomadas
//
const { Console } = require("console");

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input
  .split("")
  .map((item) => parseInt(item))
  .filter((item) => !isNaN(item));
var points = 0;
lines.forEach((line) => (points += line));
console.log((points -= 3));
