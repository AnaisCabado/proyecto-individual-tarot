import {fetchData} from "./api.js";

import { cardOption1, cardOption2, cardOption3, closeButton1, closeButton2, closeButton3 } from "./forms.js";

import { CardHTML } from "./classesHTML.js";

import { displayHome, displayInstructions, displayContact } from "./sections.js";

import { formToLocalStorage } from "./localstorage.js";

const burgerIcon = document.getElementById("burger_icon");
const navApartados = document.getElementById("nav-apartados");

burgerIcon.addEventListener("click", () => {
        navApartados.classList.toggle("active"); // Agrega o quita la clase "active"
});