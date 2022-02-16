"use strict";

/* Variaveis para completar o btn */

const semaforo       = document.querySelector("#semaforo");
const btnVerde       = document.querySelector("#btnVerde");
const btnAmarelo     = document.querySelector("#btnAmarelo");
const btnVermelho    = document.querySelector("#btnVermelho");
const btnAuto        = document.querySelector("#btnAuto");
const btnParar        = document.querySelector("#btnParar");
let interval    = null;


/* Funções para mudar de cor o semaforo */

function mudarCorPraVerde(semaforo) {
  semaforo.setAttribute("src", "./img/verde.png");
}
function mudarCorPraAmarelo(semaforo) {
  semaforo.setAttribute("src", "./img/amarelo.png");
}
function mudarCorPraVermelho(semaforo) {
  semaforo.setAttribute("src", "./img/vermelho.png");
}

function alternarCor(semaforo) {
  const conteudoSrc = semaforo.getAttribute("src");

  function checarCont(src, search) {
    return src.includes(search);
  };

  // resolução 'funcional':
  if(checarCont(conteudoSrc, "desligado")) {
    mudarCorPraVerde(semaforo);
  } else if(checarCont(conteudoSrc, "verde")) {
    mudarCorPraAmarelo(semaforo);
  } else if(checarCont(conteudoSrc, "amarelo")) {
    mudarCorPraVermelho(semaforo);
  } else {
    mudarCorPraVerde(semaforo);
  }
}

function alternarAuto(semaforo) {
    const ligarAutomatico = () =>{
        if (interval == null) {
            interval = setInterval(() => trocarCor(semaforo), 1000);
            buttonAutomatico.textContent = "Parar";
        } else {
            desligarAutomatico()
        }
    }
  }
function parar(semaforo){
    const desligarAutomatico = () => {
        clearInterval(interval);
        buttonAutomatico.textContent = "Automático";
        interval = null;
    }

}
  
/* Listeners */

semaforo.addEventListener("click", null);
// para funções com parâmetros usar: () => function(parameter);
btnVerde.addEventListener("click", () => mudarCorPraVerde(semaforo)); 
btnAmarelo.addEventListener("click", () => mudarCorPraAmarelo(semaforo));
btnVermelho.addEventListener("click", () => mudarCorPraVermelho(semaforo));
btnAuto.addEventListener("click", () =>  alternarAuto(semaforo));
btnParar.addEventListener("click",() => parar(semaforo));