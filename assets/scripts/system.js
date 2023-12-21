function rolar_1d6() {
  return Math.floor(Math.random() * 6) + 1;
}

let hab,
  luck,
  ener = false;

document.querySelector(".initPerson").addEventListener("click", function () {
  removeDisplayNone(".createPerson");
});

document.querySelector(".setHability").addEventListener("click", function () {
  hab = true;
  personagem.habilidade = rolar_1d6() + 6;
  addInative(".setHability");
  changeTextContent(
    [".hab", ".habilidade", ".habilidadeStatic"],
    personagem.habilidade
  );
  personagem.habilidade;
  validate();
});

document.querySelector(".setEnergy").addEventListener("click", function () {
  luck = true;
  personagem.energia = rolar_1d6() + rolar_1d6() + 12;
  addInative(".setEnergy");
  changeTextContent([".ener", ".energy", ".energyStatic"], personagem.energia);
  validate();
});

document.querySelector(".setLuck").addEventListener("click", function () {
  ener = true;
  personagem.sorte = rolar_1d6() + 6;
  document.querySelector(".setLuck").classList.add("inative");
  changeTextContent([".luck", ".luckStatic", ".luckGame"], personagem.sorte);
  validate();
});

document.querySelector(".start").addEventListener("click", function () {
  addDisplayNone(".system");
  removeDisplayNone(".game");
});

document.querySelector(".btnRules").addEventListener("click", function () {
  removeDisplayNone(".rules");
});

document.querySelector(".backRules").addEventListener("click", function () {
  addDisplayNone(".rules");
});

function validate() {
  if (hab && luck && ener) {
    removeInative(".backPerson");
    removeInative(".start");
    document
      .querySelector(".backPerson")
      .addEventListener("click", function () {
        addDisplayNone(".createPerson");
      });
  }
}

function changeTextContent(array, newTextContent) {
  array.forEach((className) => {
    document.querySelector(className).textContent = newTextContent;
  });
}

function removeDisplayNone(className) {
  document.querySelector(className).classList.remove("dNone");
}

function addDisplayNone(className) {
  document.querySelector(className).classList.add("dNone");
}

function removeInative(className) {
  document.querySelector(className).classList.remove("inative");
}

function addInative(className) {
  document.querySelector(className).classList.add("inative");
}
