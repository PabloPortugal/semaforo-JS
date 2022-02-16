"use strict";

const semaforo = document.querySelector("#semaforo");
const buttonVerde = document.querySelector("#button_verde");
const buttonVermelho = document.querySelector("#button_vermelho");
const buttonAmarelo = document.querySelector("#button_amarelo");
const buttonAutomatico = document.querySelector("#button_automatico");
const buttonDesligar = document.querySelector("#button_desligar");

/**
 * Objeto responsavel por armazenas os caminhos para as 
 * imagens das cores do semaforo
 */
const cores = {
    verde: "./img/verde.png",
    vermelho: "./img/vermelho.png",
    amarelo: "./img/amarelo.png",
    desligado: "./img/desligado.png",
}

let isAutomatico = false;
let interval; // id do intervalo usado no modo automatico
let proximaCor = cores.vermelho;

/**
 * Defini a proxima cor na fila para ser ativa no semaforo
 * 
 * @returns {string} proxima cor
 */
const getProximaCor = () => {
    let proximaCor;

    if (semaforo.src.includes("/verde.png")) {
        proximaCor = cores.amarelo;
    } else if (semaforo.src.includes("/vermelho.png")) {
        proximaCor = cores.verde;
    } else if (semaforo.src.includes("/amarelo.png")) {
        proximaCor = cores.vermelho;
    } else if (semaforo.src.includes("/desligado.png")){
        proximaCor = cores.verde;
    }

    return proximaCor;
}


const trocarCor = (cor) => {
    semaforo.src = cor
    proximaCor = getProximaCor();
};

/**
 * Função responsavel por ligar o modo automatico do semáforo
 */
const ligarAutomatico = () =>{
    if (interval == null) {
        interval = setInterval(() => trocarCor(proximaCor), 1000);
        buttonAutomatico.textContent = "Parar";
    } else {
        desligarAutomatico()
    }
}

/**
 * Função responsavel por desligar o modo automatico do semáforo
 */
const desligarAutomatico = () => {
    clearInterval(interval);
    buttonAutomatico.textContent = "Automático";
    interval = null;
}

/**
 * Função responsavel por desligar o semafaro, parando o modo automatico
 * e trocando a sua imagem
 */
const desligarSemaforo = () => {
    desligarAutomatico();
    trocarCor(cores.desligado);
}

const clickButtonVerde = () =>{
    trocarCor(cores.verde);
    desligarAutomatico();
}

const clickButtonVermelho = () =>{
    trocarCor(cores.vermelho);
    desligarAutomatico();
}

const clickButtonAmarelo = () =>{
    trocarCor(cores.amarelo);
    desligarAutomatico();
}

/*Eventos do listenter*/
buttonVerde.addEventListener("click", clickButtonVerde);
buttonVermelho.addEventListener("click", clickButtonVermelho);
buttonAmarelo.addEventListener("click", clickButtonAmarelo);
buttonAutomatico.addEventListener("click", ligarAutomatico);
buttonDesligar.addEventListener("click", desligarSemaforo);