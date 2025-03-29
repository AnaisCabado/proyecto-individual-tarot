import { fetchData } from "./api.js";
import { CardHTML } from "./classesHTML.js";

// VARIABLES OPCIONES TIRADAS
const button1 = document.querySelector(".button1");
const option1 = document.getElementById("option1");

const button2 = document.querySelector(".button2");
const option2 = document.getElementById("option2");

const button3 = document.querySelector(".button3");
const option3 = document.getElementById("option3");

// CAMBIO DE CLASE PARA TIRADA OPCION 1 PARA VISUALIZAR Y ESCONDER FORMULARIO
function cardOption1() {
    option1.classList.replace("hidden", "active");
    option2.classList.replace("active", "hidden");
    option3.classList.replace("active", "hidden");
}
button1.addEventListener("click", cardOption1);

const closeButton1 = document.getElementById("close-button-1");
function closeOption1() {
    option1.classList.replace("active", "hidden");
}
closeButton1.addEventListener("click", closeOption1);

const option1Submit = document.querySelector(".option1__submit");
async function oneCard() {
    let cardData = await fetchData();
    let cardAttributes = cardData.cards[0];
    let displayCard = new CardHTML(
        cardAttributes.type,
        cardAttributes.name_short,
        cardAttributes.name,
        cardAttributes.value_int,
        cardAttributes.meaning_up,
        cardAttributes.meaning_rev,
        cardAttributes.desc
    )
}
option1Submit.addEventListener("click", oneCard);

// CAMBIO DE CLASE PARA TIRADA OPCION 2 PARA VISUALIZAR Y ESCONDER FORMULARIO
function cardOption2() {
    option1.classList.replace("active", "hidden");
    option2.classList.replace("hidden", "active");
    option3.classList.replace("active", "hidden");
}
button2.addEventListener("click", cardOption2);

const closeButton2 = document.getElementById("close-button-2");
function closeOption2() {
    option2.classList.replace("active", "hidden");
}
closeButton2.addEventListener("click", closeOption2);

const option2Submit = document.querySelector(".option2__submit");
async function threeCard() {
    let cardData = await fetchData();
    for (let i = 0; i < 3; i++) {
        let cardAttributes = cardData.cards[i];
        let displayCard = new CardHTML(
            cardAttributes.type,
            cardAttributes.name_short,
            cardAttributes.name,
            cardAttributes.value_int,
            cardAttributes.meaning_up,
            cardAttributes.meaning_rev,
            cardAttributes.desc
        )
    }
}
option2Submit.addEventListener("click", threeCard);

// CAMBIO DE CLASE PARA TIRADA OPCION 2 PARA VISUALIZAR Y ESCONDER FORMULARIO
function cardOption3() {
    option1.classList.replace("active", "hidden");
    option2.classList.replace("active", "hidden");
    option3.classList.replace("hidden", "active");
}
button3.addEventListener("click", cardOption3);

const closeButton3 = document.getElementById("close-button-3");
function closeOption3() {
    option3.classList.replace("active", "hidden");
}
closeButton3.addEventListener("click", closeOption3);

const option3Submit = document.querySelector(".option3__submit");
async function fiveCard() {
    let cardData = await fetchData();
    for (let i = 0; i < 5; i++) {
        let cardAttributes = cardData.cards[i];
        let displayCard = new CardHTML(
            cardAttributes.type,
            cardAttributes.name_short,
            cardAttributes.name,
            cardAttributes.value_int,
            cardAttributes.meaning_up,
            cardAttributes.meaning_rev,
            cardAttributes.desc
        )
    }
}
option3Submit.addEventListener("click", fiveCard);


export {
    cardOption1, closeButton1,
    cardOption2, closeButton2,
    cardOption3, closeButton3
}