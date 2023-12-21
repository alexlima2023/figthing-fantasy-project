const character = {
  ability: 0,
  energy: 0,
  luck: 0,
  equips: ["Espada", "Lampião"],
  gold: 0,
  provisions: 0,
};

const game = {
  world: {
    _01: {
      tittle: "1",
      type: "history",
      text: `Sua caminhada de dois dias finalmente chega ao fim. Você coloca sua espada no chão e senta-se nas pedras cobertas de musgo para descansar um 
      pouco. Você espreguiça-se, esfrega os olhos e finalmente dá uma olhada na Montanha de Fogo. A própria montanha parece ameaçadora. A face escarpada 
      à sua frente parece ter sido rasgada pelas garras de alguma criatura gigantesca. Rochas afiadas projetam-se em ângulos não-naturais. No topo, você
      consegue ver a misteriosa coloração vermelha — provavelmente alguma estranha vegetação – que dá nome à montanha. Talvez ninguém jamais venha a saber
      de uma caverna. Você pega a espada, levanta-se e pensa nos perigos que o esperam. Mas com determinação você embainha a espada e se aproxima
      da caverna. Você perscruta a escuridão e vê, à sua frente, paredes negras, cobertas de limo, e poças d’água pelo chão de pedra. O ar é úmido
      e frio. Você acende seu lampião e avança cautelosamente rumo à escuridão. Teias roçam seu rosto e você ouve passos apressados de pés pequenos:
      ratos, muito provavelmente. Você adentra a caverna. Depois de alguns metros, chega a uma bifurcação. Você vai para o oeste ou leste?
      `,
      buttons: { _71: "Para o Oeste", _278: "Para o Leste" },
    },
    _33: {
      tittle: "33",
      type: "history",
      text: `A criatura acorda sobressaltada. Ela pula e corre na sua direção, desarmada. Com sua espada você deveria ser capaz de derrotá-la, mas seus
      dentes parecem perigosos. Você pode escapar pela porta(vá para 320) ou ficar e lutar com o orc. Se derrotá-lo, você pode pegar a caixa. Vá para 147.`,
      buttons: {
        _320: "Escapar pela porta",
        _battle: "Lutar contra o Orc",
      },
      values: ["_147"],
    },
    _71: {
      tittle: "71",
      type: "luckTest",
      text: `Há uma curva na passagem para a direita, levando para o norte. Você se aproxima do posto de sentinela na esquina com cuidado e, ao olhar dentro 
      dele, vê uma criatura estranha, parecida com um goblin, trajando armadura de couro, dormindo em serviço. Você pode tentar passar furtivamente por ele. 
      Teste a sorte, Se for sortudo, ele não acorda e permanece roncando alto - Vá para 301. Se for Azarado, você pisa em algumas pedras soltas e os olhos 
      dele se abrem - Vá para a 248.`,
      buttons: { _luckTest: "Testar Sorte" },
      values: ["_301", "_248"],
    },
    _82: {
      tittle: "82",
      type: "luckTest",
      text: `A porta abre, revelando um aposento pequeno e malcheiroso. No centro há uma mesa de madeira balouçante com uma vela acesa. Embaixo 
      da mesa há uma pequena caixa de madeira. Dormindo em um colchão de palha no canto mais afastado do aposento há uma criatura pequena, entroncada, 
      com uma cara feia e verruguenta; o mesmo tipo de criatura que você viu dormindo no posto de sentinela. Deve ser o guarda do turno da noite. Você 
      pode retornar ao corredor e ir para o norte (vá para 208) ou atravessar furtivamente o aposento e tentar pegar a caixa, teste a sorte. Se for sortudo, 
      ela não acorda – vá para 147. Se for azarado, vá para 33.
      `,
      buttons: { _luckTest: "Testar Sorte" },
      values: ["_147", "_33"],
    },
    _92: {
      tittle: "92",
      type: "history",
      text: `Você retorna para a bifurcação na passagem. À esquerda, você vê a entrada da caverna à distância, mas segue em frente. Vá para 71.
      `,
      buttons: { _71: "Ir para 71" },
    },
    _156: {
      tittle: "156",
      type: "abilityTest",

      text: `Você dá um encontrão na porta. Role dois dados. Se o resultado for menor ou igual a sua Habilidade, você é bem-sucedido – vá para 343. 
      Se o resultado for maior que a sua Habilidade, você se fere e decide não tentar de novo. Volte para 92.
      `,
      buttons: { _abilityTest: "Testar Habilidade" },
      values: ["_343", "_92"],
    },
    _248: {
      tittle: "248",
      type: "history",
      text: `A criatura que acabou de acordar é um orc! Ele se põe de pé lentamente e se vira para puxar uma corda que provavelmente é um alarme. Você precisa atacá-lo rapidamente.
      Se o derrotar, pode continuar subindo a passagem - vá para 301.
      `,
      buttons: { _battle: "Batalhar" },
      _lutar: { name: "orc", habilidade: 6, energia: 4 },
    },
    _278: {
      tittle: "278",
      type: "history",
      text: `A passagem logo termina em uma porta de madeira trancada. Você cola o ouvido na porta mas não ouve nada. Se quiser tentar derrubar a porta, 
      vá para a 156. Se preferir voltar à bifurcação, vá para 92.`,
      buttons: { _156: "Tentar derrubar a porta", _92: "Voltar a Bifurcação" },
    },
    _301: {
      tittle: "301",
      type: "history",
      text: `A sua esquerda, no lado oeste da passagem, há uma porta de madeira rudimentar. Você cola o ouvido na porta e ouve um barulho que pode ser de
       alguma criatura roncando. Você quer abrir a porta? Nesse caso vá para a 82. Se quiser continuar para o norte, vá para 208.`,
      buttons: { _82: "Abrir a porta", _208: "Ir para o norte" },
    },
    _343: {
      tittle: "343",
      type: "damage",
      text: `A porta cede e você cai de cabeça no aposento. Mas seu coração fica apertado quando você se dá conta de que não vai cair no chão, 
      mas em um poço! Por sorte, o poço não é muito fundo e você cai por mais ou menos dois metros. Perca 1 ponto de Energia devido aos ferimentos, 
      escale o poço e saia pela porta rumo ao oeste. Vá para a 92.
      `,
      dano: { energia: -1 },
      buttons: { _92: "Ir para a 92" },
    },
  },
};

function createText(value) {
  for (local in game.world) {
    if (local === value) {
      document.querySelector(".text").textContent = game.world[local].text;
      document.querySelector(".title").textContent = game.world[local].tittle;
      createButtons(
        Object.values(game.world[local].buttons).length,
        Object.values(game.world[local].buttons),
        Object.keys(game.world[local].buttons),
        game.world[local].type,
        game.world[local].values
      );
    }
  }
}

function createButtons(qtd, values, keys, type, valuesTest) {
  if (type === "history") {
    createQuantityButtons(qtd, values, keys);
  }

  if (type === "luckTest") {
    createQuantityButtons(qtd, values, keys, valuesTest);
  }

  if (type == "abilityTest") {
    createQuantityButtons(qtd, values, keys, valuesTest);
  }

  if (type === "battle") {
    createQuantityButtons(qtd, values, keys);
  }

  if (type === "damage") {
    createQuantityButtons(qtd, values, keys);
  }
}

function createQuantityButtons(qtd, textContent, callbackFunction, valuesTest) {
  const actionsButtons = document.querySelector(".buttons");
  actionsButtons.innerHTML = "";
  for (let i = 0; i < qtd; i++) {
    const button = document.createElement("button");
    button.textContent = textContent[i];
    if (String(callbackFunction) === "_luckTest") {
      button.addEventListener("click", () => luckTest(valuesTest));
    }
    if (String(callbackFunction) === "_abilityTest") {
      button.addEventListener("click", () => abilityTest(valuesTest));
    } else {
      button.addEventListener("click", () => createText(callbackFunction[i]));
    }
    actionsButtons.appendChild(button);
  }
}

function luckTest(value) {
  let dices = role_1d6() + role_1d6();
  if (dices <= character.luck) {
    createText(value[0]);
    character.luck--;
    document.querySelector(".luckGame").textContent = character.luck;
  } else {
    createText(value[1]);
    character.luck--;
    document.querySelector(".luckGame").textContent = character.luck;
  }
  console.log(value[0], value[1]);
}

function abilityTest(value) {
  let dices = role_1d6() + role_1d6();
  dices <= character.ability ? createText(value[0]) : createText(value[1]);
}

createText("_01");
