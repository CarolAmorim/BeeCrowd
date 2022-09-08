// 1078	- Tabuada
//
const { Console } = require("console");

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n").map((item) => parseInt(item));

for (let index = 1; index <= 10; index++) {
  console.log(`${index} x ${lines[0]} = ` + index * lines[0]);
}
