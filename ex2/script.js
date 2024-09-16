const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

const indexPreto = rainbow.indexOf("Preto");
if (indexPreto !== -1) {
  rainbow.splice(indexPreto, 1);
}

rainbow.splice(2, 0, "Amarelo", "Verde");

rainbow.push("Roxo");

console.log(rainbow);