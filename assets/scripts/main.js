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
    _71: {
      titulo: "71",
      texto: `Há uma curva na passagem para a direita, levando para o norte. Você se aproxima do posto de sentinela na esquina com cuidado e, ao olhar dentro 
      dele, vê uma criatura estranha, parecida com um goblin, trajando armadura de couro, dormindo em serviço. Você pode tentar passar furtivamente por ele. 
      Teste a sorte, Se for sortudo, ele não acorda e permanece roncando alto - Vá para 301. Se for Azarado, você pisa em algumas pedras soltas e os olhos 
      dele se abrem.`,
      opcoes: { sorte: "Testar Sorte" },
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
        Object.keys(jogo.mundo[local].opcoes)
      );
    }
  }
}

function criarBotoes(qtd, values, keys) {
  const actionsButtons = document.querySelector(".buttons");
  actionsButtons.innerHTML = "";
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
}

function testarSorte() {}

criarTexto("_01");
