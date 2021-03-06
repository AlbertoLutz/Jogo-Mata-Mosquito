let altura = 0;
let largura = 0;

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

ajustaTamanhoPalcoJogo();

function posicaoRandomica() {
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
  }

  let posicaoX = Math.floor(Math.random() * largura) - 90;
  let posicaoY = Math.floor(Math.random() * altura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  let mosquito = document.createElement("img");
  mosquito.src = "imagens/mosca.png";
  mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();

  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
 onClick(mosquito) = () => {
    console.log("Elemento clicado a tempo");
  };
 

  document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
  let classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosquito01";

    case 1:
      return "mosquito02";

    case 2:
      return "mosquito03";
  }
}

function ladoAleatorio() {
  let classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return "ladoA";

    case 1:
      return "ladoB";
  }
}
