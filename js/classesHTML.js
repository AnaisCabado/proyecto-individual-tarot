import { Card } from "./classes.js";



class CardHTML extends Card {
    constructor(type, name_short, name, value_int, meaning_up, meaning_rev, desc) {
        super(type, name_short, name, value_int, meaning_up, meaning_rev, desc);
        this.initializeOptionHTML();
    }

    initializeOptionHTML() {
        const cards = document.querySelector(".cards");

        const card = document.createElement("div");
        card.classList.add("card");

        const cardImg = document.createElement("img");
        cardImg.classList.add("card-img");

        let cardText = document.querySelector(".card-text");
        let cardTitle = document.querySelector(".card-title");
        let cardDescription = document.querySelector(".card-description");

        cardImg.style.opacity = "0";
        cardImg.setAttribute("src", `./assets/${this.name.toLowerCase().replaceAll(" ", "")}.jpeg`);
        cardImg.setAttribute("alt", this.name);
        cardImg.setAttribute("loading", "lazy");

        card.appendChild(cardImg);

        cards.append(card);

        // FUNCION DISPLAY IMG CARD
        card.addEventListener("click", () => {
            cardImg.style.opacity = "1";
        })
        // FUNCION DISPLAY TEXTO CARD
        cardImg.addEventListener("click", () => {
            cardText.classList.replace("hidden", "active");

            cardTitle.textContent = "";
            cardDescription.style.opacity = "0";

            let cardTitleSplit = this.name.split("");
            let i = 0;

            function typingEffect() {
                if (i < cardTitleSplit.length) {
                    cardTitle.textContent += cardTitleSplit[i];
                    i++;
                    setTimeout(typingEffect, 100);
                } else {
                    setTimeout(() => {
                        cardDescription.style.opacity = "1";
                    }, 500);
                }
            }
            typingEffect();

            cardDescription.textContent = this.desc;
        })
    }
}

export {
    CardHTML
};
