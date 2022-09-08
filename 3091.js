// 3091	- Resto 1.0
//
const { Console } = require("console");

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

if ((A >= 1) & (B <= 100000)) {
  console.log(A % B);
} else {
  console.log(
    "Valores inválidos!\n A deve ser maior que 1.\n B dever ser menor que 100000."
  );
}
