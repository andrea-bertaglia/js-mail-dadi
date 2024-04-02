"use strict";

// Test
console.log("Hello World!");

// 1. Creo le variabili
let userNum = 0; // number
let pcNum = 0; // number
let result;
const userElem = document.querySelector(".user"); // object | null
const pcElem = document.querySelector(".pc"); // object | null
const resultElem = document.querySelector(".result"); // object | null
const playButton = document.querySelector(".display"); // object | null
const refreshButton = document.querySelector(".hidden"); // object | null
let faUserElem = ""; // string | null
let faPcElem = ""; // string | null

// 2. Avvio la rilevazione del click
const checkButton = document.getElementById("gioca");
checkButton.addEventListener("click", function() {

    // Genero i numeri random
    userNum = Math.floor(Math.random() * 6) + 1; 
    console.log("Numero USER: ", userNum);
    pcNum = Math.floor(Math.random() * 6) + 1; 
    console.log("Numero PC: ",pcNum);
    
    // Confronto per stabilire il vincitore
    if (userNum > pcNum) {
        result = "Hai Vinto!";
    } else if (userNum === pcNum) {
        result = "Hai Pareggiato";
    } else {
        result = "Hai Perso!";
    }
    console.log(result);
    // Creo gli elementi in pagina: verifico quale classe applicare all'utente in base al numero random
    if (userNum === 1) {
        faUserElem = "fa-dice-one";
    } else if (userNum === 2) {
        faUserElem = "fa-dice-two";
    } else if (userNum === 3) {
        faUserElem = "fa-dice-three";
    } else if (userNum === 4) {
        faUserElem = "fa-dice-four";
    } else if (userNum === 5) {
        faUserElem = "fa-dice-five";
    } else if (userNum === 6) {
        faUserElem = "fa-dice-six"
    }
    
    // Creo gli elementi in pagina: verifico quale classe applicare al pc in base al numero random
    if (pcNum === 1) {
        faPcElem = "fa-dice-one";
    } else if (pcNum === 2) {
        faPcElem = "fa-dice-two";
    } else if (pcNum === 3) {
        faPcElem = "fa-dice-three";
    } else if (pcNum === 4) {
        faPcElem = "fa-dice-four";
    } else if (pcNum === 5) {
        faPcElem = "fa-dice-five";
    } else if (pcNum === 6) {
        faPcElem = "fa-dice-six"
    }

    // Genero gli elementi
    const textUserElem = document.createElement("p");
    const iUserElem = document.createElement("i"); // object
    const textPcElem = document.createElement("p");
    const iPcElem = document.createElement("i"); // object

    // Aggiungo i valori negli elementi
    textUserElem.innerHTML = "Il tuo numero";
    iUserElem.classList.add("fa-solid");
    iUserElem.classList.add(`${faUserElem}`);
    textPcElem.innerHTML = "Il numero del PC";
    iPcElem.classList.add("fa-solid");
    iPcElem.classList.add(`${faPcElem}`);

    // Stampo in pagina gli elementi
    userElem.append(textUserElem);
    userElem.append(iUserElem);
    pcElem.append(textPcElem);
    pcElem.append(iPcElem);
    resultElem.innerHTML = result;

    // Gestisco i pulsanti
    playButton.classList.remove("display");
    playButton.classList.add("hidden");
    refreshButton.classList.remove("hidden");
    refreshButton.classList.add("display");
})


