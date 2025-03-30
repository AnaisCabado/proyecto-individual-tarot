import { Card } from "./classes.js";

class CardHTML extends Card {
    constructor(type, name_short, name, value_int, meaning_up, meaning_rev, desc) {
        super(type, name_short, name, value_int, meaning_up, meaning_rev, desc);
        this.initializeOptionHTML();
    }

    initializeOptionHTML() {
        const optionResult = document.getElementById("option-result");

        const card = document.createElement("div");
        card.classList.add("card");

        const cardImg = document.createElement("img");
        const cardTitle = document.createElement("h4");
        const cardDescription = document.createElement("p");

        cardImg.setAttribute("src", `./assets/${this.name.toLowerCase().replaceAll(" ", "")}.jpeg`);
        cardImg.setAttribute("alt", this.name);
        cardImg.setAttribute("loading", "lazy");
        cardTitle.textContent = this.name;
        cardDescription.textContent = this.desc;

        card.append(cardImg, cardTitle, cardDescription);

        optionResult.appendChild(card);
    }
}

export { CardHTML };
