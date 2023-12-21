function role_1d6() {
  return Math.floor(Math.random() * 6) + 1;
}

let hab,
  luck,
  ener = false;

document.querySelector(".initPerson").addEventListener("click", function () {
  removeDisplayNone(".createPerson");
});

document.querySelector(".setAbility").addEventListener("click", function () {
  hab = true;
  character.ability = role_1d6() + 6;
  addInactive(".setAbility");
  changeTextContent(
    [".hab", ".habilidade", ".habilidadeStatic"],
    character.ability
  );
  character.ability;
  validate();
});

document.querySelector(".setEnergy").addEventListener("click", function () {
  luck = true;
  character.energy = role_1d6() + role_1d6() + 12;
  addInactive(".setEnergy");
  changeTextContent([".ener", ".energy", ".energyStatic"], character.energy);
  validate();
});

document.querySelector(".setLuck").addEventListener("click", function () {
  ener = true;
  character.luck = role_1d6() + 6;
  document.querySelector(".setLuck").classList.add("inactive");
  changeTextContent([".luck", ".luckStatic", ".luckGame"], character.luck);
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
    removeInactive(".backPerson");
    removeInactive(".start");
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

function removeInactive(className) {
  document.querySelector(className).classList.remove("inactive");
}

function addInactive(className) {
  document.querySelector(className).classList.add("inactive");
}
