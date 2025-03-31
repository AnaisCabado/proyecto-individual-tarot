import { Card } from "./classes.js";

let cardImg;

class CardHTML extends Card {
    constructor(type, name_short, name, value_int, meaning_up, meaning_rev, desc) {
        super(type, name_short, name, value_int, meaning_up, meaning_rev, desc);
        this.initializeOptionHTML();
    }

    initializeOptionHTML() {
        const optionResult = document.getElementById("option-result");

        const card = document.createElement("div");
        card.classList.add("card");

        cardImg = document.createElement("img");
        cardImg.classList.add("card-img")

        const cardText = document.querySelector(".card-text");
        const cardTitle = document.querySelector(".card-title");
        const cardDescription = document.querySelector(".card-description");

        cardImg.setAttribute("src", `./assets/${this.name.toLowerCase().replaceAll(" ", "")}.jpeg`);
        cardImg.setAttribute("alt", this.name);
        cardImg.setAttribute("loading", "lazy");
        cardTitle.innerHTML = "";
        cardDescription.innerHTML = "";

        card.appendChild(cardImg);

        optionResult.appendChild(card);


        // FUNCION DISPLAY TEXTO CARD
        cardImg.addEventListener("click", () => {
            cardTitle.textContent = this.name;
            cardDescription.textContent = this.desc;

            cardText.classList.replace("hidden", "active");
        })
    }
}

export { 
    CardHTML
};
