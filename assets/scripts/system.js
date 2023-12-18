function rolar_1d6() {
  return Math.floor(Math.random() * 6) + 1;
}

let hab = false;
let luck = false;
let ener = false;

document.querySelector(".initPerson").addEventListener("click", function () {
  document.querySelector(".createPerson").classList.remove("dNone");
});

document.querySelector(".setHability").addEventListener("click", function () {
  personagem.habilidade = rolar_1d6() + 6;
  document.querySelector(".hab").textContent = personagem.habilidade;
  document.querySelector(".setHability").classList.add("inative");
  hab = true;
  document.querySelector(".habilidade").textContent = personagem.habilidade;
  document.querySelector(".habilidadeStatic").textContent =
    personagem.habilidade;
});

document.querySelector(".setEnergy").addEventListener("click", function () {
  personagem.energia = rolar_1d6() + rolar_1d6() + 12;
  document.querySelector(".ener").textContent = personagem.energia;
  document.querySelector(".setEnergy").classList.add("inative");
  luck = true;
  document.querySelector(".energy").textContent = personagem.energia;
  document.querySelector(".energyStatic").textContent = personagem.energia;
});

document.querySelector(".setLuck").addEventListener("click", function () {
  personagem.sorte = rolar_1d6() + 6;
  document.querySelector(".luck").textContent = personagem.sorte;
  document.querySelector(".luckStatic").textContent = personagem.sorte;
  document.querySelector(".luckGame").textContent = personagem.sorte;
  document.querySelector(".setLuck").classList.add("inative");
  ener = true;
  if (hab && luck && ener) {
    document.querySelector(".backPerson").classList.remove("inative");
    document
      .querySelector(".backPerson")
      .addEventListener("click", function () {
        document.querySelector(".createPerson").classList.add("dNone");
      });
    document.querySelector(".start").classList.remove("inative");
  }
});

document.querySelector(".start").addEventListener("click", function () {
  document.querySelector(".system").classList.add("dNone");
  document.querySelector(".game").classList.remove("dNone");
});
