import { options } from "./forms.js";

// VARIABLES SECCIONES
const homeButton = document.querySelector(".home-button");
const home = document.getElementById("option-buttons");
const instructionsButton = document.querySelector(".instructions-button")
const instructions = document.getElementById("instructions");
const contactButton = document.querySelector(".contact-button");
const contact = document.getElementById("contact");
const optionResult = document.getElementById("option-result");

// MOSTRAR SECCION HOME
function displayHome() {
    home.classList.replace("hidden", "active");

    instructions.classList.replace("active", "hidden");
    contact.classList.replace("active", "hidden");
    optionResult.classList.replace("active", "hidden");
}
homeButton.addEventListener("click", displayHome);

// MOSTRAR SECCION INSTRUCTIONS
function displayInstructions() {
    instructions.classList.replace("hidden", "active");

    home.classList.replace("active", "hidden");
    contact.classList.replace("active", "hidden");

    optionResult.classList.replace("active", "hidden");
}
instructionsButton.addEventListener("click", displayInstructions);

// MOSTRAR SECCION CONTACT
function displayContact() {
    contact.classList.replace("hidden", "active");

    instructions.classList.replace("active", "hidden");
    home.classList.replace("active", "hidden");

    optionResult.classList.replace("active", "hidden");
    console.log(optionResult)
}
contactButton.addEventListener("click", displayContact);



export {
    displayHome, displayInstructions, displayContact
}