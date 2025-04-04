import { fetchData } from "./api.js";

import { cardOption1, cardOption2, cardOption3, closeButton1, closeButton2, closeButton3 } from "./forms.js";

import { CardHTML } from "./classesHTML.js";

import { displayHome, displayInstructions, displayContact } from "./sections.js";

import { formToLocalStorage } from "./localstorage.js";

const burgerIcon = document.getElementById("burger_icon");
const navApartados = document.getElementById("nav-apartados");

burgerIcon.addEventListener("click", () => {
    navApartados.classList.toggle("active");
});


const input = document.getElementById("browser");
const display = document.getElementById("card-display");

async function getTarotCard(query) {
    try {
        const response = await fetch(`https://tarotapi.dev/api/v1/cards/search?q=${query}`);
        if (!response.ok) throw new Error(`Error en API: ${response.status}`);

        const data = await response.json();
        console.log("Datos recibidos:", data);
        return data;
    } catch (error) {
        console.error("Error al obtener la carta:", error);
        return null;
    }
}

input.addEventListener("keypress", async function(event) {
    if (event.key === "Enter") { 
        event.preventDefault(); 

        const query = input.value.trim().toLowerCase().replaceAll(" ", "");

        if (query === "") {
            display.innerHTML = "";
            return;
        }

        const cardData = await getTarotCard(query); 

        if (!cardData || !cardData.cards || cardData.cards.length === 0) {
            display.innerHTML = "<p>No card found.</p>";
            return;
        }

        const card = cardData.cards[0];

        display.innerHTML = "";

        let cardName = document.createElement("h2");
        cardName.textContent = card.name;

        let cardImg = document.createElement("img");
        cardImg.setAttribute("src", `./assets/${query}.jpeg`);

        display.classList.replace("hidden", "active");
        display.append(cardName, cardImg);
    }
});

