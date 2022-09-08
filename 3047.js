// 	3047 - A idade de Dona Mônica
//
const { Console } = require("console");

var input = require("fs").readFileSync("stdin", "utf8");
var age = input.split("\n").map((item) => parseInt(item));
var big = 0;

if (
  (age[0] >= 40) &
  (age[0] <= 110) &
  (age[1] < age[0]) &
  (age[2] < age[0]) &
  (age[1] >= 1) &
  (age[2] >= 1) &
  (age[1] != age[2])
) {
  age.push(age[0] - (age[1] + age[2]));

  for (let idx = 1; idx < age.length; idx++) {
    if (big < age[idx]) big = age[idx];
  }
  console.log(big);
} else {
  console.log("Idade(s) inválida(s)");
}
