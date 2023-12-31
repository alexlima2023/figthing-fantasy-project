let personagem = {
  habilidade: 0,
  energia: 0,
  sorte: 0,
  equipamentos: ["Espada", "Lampião"],
  ouro: 0,
  provisões: 0,
};

const jogo = {
  mundo: {
    _01: {
      titulo: "1",
      tipo: "historia",
      texto: `Sua caminhada de dois dias finalmente chega ao fim. Você coloca sua espada no chão e senta-se nas pedras cobertas de musgo para descansar um 
      pouco. Você espreguiça-se, esfrega os olhos e finalmente dá uma olhada na Montanha de Fogo. A própria montanha parece ameaçadora. A face escarpada 
      à sua frente parece ter sido rasgada pelas garras de alguma criatura gigantesca. Rochas afiadas projetam-se em ângulos não-naturais. No topo, você
      consegue ver a misteriosa coloração vermelha — provavelmente alguma estranha vegetação – que dá nome à montanha. Talvez ninguém jamais venha a saber
      de uma caverna. Você pega a espada, levanta-se e pensa nos perigos que o esperam. Mas com determinação você embainha a espada e se aproxima
      da caverna. Você perscruta a escuridão e vê, à sua frente, paredes negras, cobertas de limo, e poças d’água pelo chão de pedra. O ar é úmido
      e frio. Você acende seu lampião e avança cautelosamente rumo à escuridão. Teias roçam seu rosto e você ouve passos apressados de pés pequenos:
      ratos, muito provavelmente. Você adentra a caverna. Depois de alguns metros, chega a uma bifurcação. Você vai para o oeste ou leste?
      `,
      opcoes: { _71: "Para o Oeste", _278: "Para o Leste" },
    },
    _33: {
      titulo: "33",
      tipo: "historia",
      texto: `A criatura acorda sobressaltada. Ela pula e corre na sua direção, desarmada. Com sua espada você deveria ser capaz de derrotá-la, mas seus
      dentes parecem perigosos. Você pode escapar pela porta(vá para 320) ou ficar e lutar com o orc. Se derrotá-lo, você pode pegar a caixa. Vá para 147.`,
      opcoes: {
        _320: "Escapar pela porta",
        _lutar: { name: "orc", habilidade: 6, energia: 4 },
      },
    },
    _71: {
      titulo: "71",
      tipo: "teste",
      texto: `Há uma curva na passagem para a direita, levando para o norte. Você se aproxima do posto de sentinela na esquina com cuidado e, ao olhar dentro 
      dele, vê uma criatura estranha, parecida com um goblin, trajando armadura de couro, dormindo em serviço. Você pode tentar passar furtivamente por ele. 
      Teste a sorte, Se for sortudo, ele não acorda e permanece roncando alto - Vá para 301. Se for Azarado, você pisa em algumas pedras soltas e os olhos 
      dele se abrem - Vá para a 248.`,
      opcoes: { sorte: "Testar Sorte" },
      valores: ["_301", "_248"],
    },
    _82: {
      titulo: "82",
      tipo: "historia",
      texto: `Você retorna para a bifurcação na passagem. À esquerda, você vê a entrada da à distância, mas segue em frente. Vá para a 71.`,
      opcoes: { _71: "Para o Oeste" },
    },
    _92: {
      titulo: "92",
      tipo: "historia",
      texto: `A porta abre, revelando um aposento pequeno e malcheiroso. No centro há uma mesa de madeira balouçante com uma vela acesa. Embaixo da mesa 
      há uma pequena caixa de madeira. Dormindo em um colchão de palha em um canto mais afastado do aposento há uma criatura pequena, entroncada, com uma
      cara feia e verruguenta, o mesmo tipo de criatura que você viu dormindo no posto de sentinela. Deve ser o guarda do turno da noite. Você pode retornar
      ao corredor e ir para o norte(vá para a 208) ou tentar atravessar furtivamente o aposento e tentar pegar a caixa sem despertar a criatura. Se quiser
      roubar a caixa, teste a sorte. Se for sortudo, ela não acorda – vá para a 147. Se for azarado, vá para a 33.`,
      opcoes: { _208: "Para o norte", _testarSorte: ["_147", "_33"] },
    },
    _156: {
      titulo: "156",
      tipo: "teste",

      texto: `Você dá um encontrão na porta. Role dois dados. Se o resultado for menor ou igual a sua Habilidade, você é bem-sucedido – vá para 343. 
      Se o resultado for maior que a sua Habilidade, você se fere e decide não tentar de novo. Volte para 92.
      `,
      opcoes: { testarHabilidade: "Testar Habilidade" },
      valores: ["_343", "_92"],
    },
    _248: {
      titulo: "248",
      tipo: "historia",
      texto: `A criatura que acabou de acordar é um orc! Ele se põe de pé lentamente e se vira para puxar uma corda que provavelmente é um alarme. Você precisa atacá-lo rapidamente.
      Se o derrotar, pode continuar subindo a passagem - vá para 301.
      `,
      opcoes: { _Batalha: "Batalhar" },
      _lutar: { name: "orc", habilidade: 6, energia: 4 },
    },
    _278: {
      titulo: "278",
      tipo: "historia",
      texto: `A passagem logo termina em uma porta de madeira trancada. Você cola o ouvido na porta mas não ouve nada. Se quiser tentar derrubar a porta, 
      vá para a 156. Se preferir voltar à bifurcação, vá para 92.`,
      opcoes: { _156: "Tentar derrubar a porta", _92: "Voltar a Bifurcação" },
    },
    _301: {
      titulo: "301",
      tipo: "historia",
      texto: `A sua esquerda, no lado oeste da passagem, há uma porta de madeira rudimentar. Você cola o ouvido na porta e ouve um barulho que pode ser de
       alguma criatura roncando. Você quer abrir a porta? Nesse caso vá para a 82. Se quiser continuar para o norte, vá para 208.`,
      opcoes: { _82: "Abrir a porta", _208: "Ir para o norte" },
    },
    _343: {
      titulo: "343",
      tipo: "dano",
      texto: `A porta cede e você cai de cabeça no aposento. Mas seu coração fica apertado quando você se dá conta de que não vai cair no chão, 
      mas em um poço! Por sorte, o poço não é muito fundo e você cai por mais ou menos dois metros. Perca 1 ponto de Energia devido aos ferimentos, 
      escale o poço e saia pela porta rumo ao oeste. Vá para a 92..
      `,
      dano: { energia: -1 },
      opcoes: { _92: "Ir para a 92" },
    },
  },
};

function criarTexto(value) {
  for (local in jogo.mundo) {
    if (local === value) {
      document.querySelector(".text").textContent = jogo.mundo[local].texto;
      document.querySelector(".title").textContent = jogo.mundo[local].titulo;
      criarBotoes(
        Object.values(jogo.mundo[local].opcoes).length,
        Object.values(jogo.mundo[local].opcoes),
        Object.keys(jogo.mundo[local].opcoes),
        jogo.mundo[local].tipo,
        jogo.mundo[local].valores
      );
    }
  }
}

function criarBotoes(qtd, values, keys, type, valuesTest) {
  const actionsButtons = document.querySelector(".buttons");
  actionsButtons.innerHTML = "";
  if (type === "historia") {
    if (qtd == 1) {
      const button1 = document.createElement("button");
      button1.textContent = values[0];
      button1.addEventListener("click", () => criarTexto(keys[0]));
      actionsButtons.appendChild(button1);
    }
    if (qtd == 2) {
      const button1 = document.createElement("button");
      const button2 = document.createElement("button");
      button1.textContent = values[0];
      button2.textContent = values[1];
      button1.addEventListener("click", () => criarTexto(keys[0]));
      button2.addEventListener("click", () => criarTexto(keys[1]));
      actionsButtons.appendChild(button1);
      actionsButtons.appendChild(button2);
    }

  } else if (type === "teste") {
    if (qtd == 1) {
      const button1 = document.createElement("button");
      button1.textContent = values[0];
      button1.addEventListener("click", () => testarSorte(valuesTest));
      actionsButtons.appendChild(button1);
    }

  } else if (type === "dano") {
    personagem.energia -= 1;
    document.querySelector(".energy").textContent = personagem.energia;
    if (qtd == 1) {
      const button1 = document.createElement("button");
      button1.textContent = values[0];
      button1.addEventListener("click", () => criarTexto(keys[0]));
      actionsButtons.appendChild(button1);
    }
  }
}

function testarSorte(value) {
  let dices = rolar_1d6() + rolar_1d6();
  if (dices <= personagem.sorte) {
    criarTexto(value[0]);
    personagem.sorte--;
    document.querySelector(".luckGame").textContent = personagem.sorte;

  } else {
    criarTexto(value[1]);
    personagem.sorte--;
    document.querySelector(".luckGame").textContent = personagem.sorte;
  }
  console.log(value[0], value[1]);
}

function testarHabilidade(value) {
  let dices = rolar_1d6() + rolar_1d6();
  if (dices <= personagem.habilidade) {
    criarTexto(value[0]);
  } else {
    criarTexto(value[1]);
  }
}

criarTexto("_01");
