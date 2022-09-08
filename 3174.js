// 	3174	- Grupo de Trabalho do Noel
//
const { Console } = require("console");

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let bonecos = 0,
  arquitetos = 0,
  musicos = 0,
  desenhistas = 0;

lines.forEach((line) => {
  let data = line.split(" ");
  switch (data[1]) {
    case "bonecos":
      bonecos += parseInt(data[2]);
      break;
    case "arquitetos":
      arquitetos += parseInt(data[2]);
      break;
    case "musicos":
      musicos += parseInt(data[2]);
      break;
    case "desenhistas":
      desenhistas += parseInt(data[2]);
      break;
  }
});

console.log(
  Math.floor(bonecos / 8) +
    Math.floor(arquitetos / 4) +
    Math.floor(musicos / 6) +
    Math.floor(desenhistas / 12)
);
