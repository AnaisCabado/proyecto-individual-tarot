
// VARIABLES SECCIONES
const homeButton = document.querySelector(".home-button");
const home = document.getElementById("option-buttons");

const instructionsButton = document.querySelector(".instructions-button")
const instructions = document.getElementById("instructions");

const contactButton = document.querySelector(".contact-button");
const contact = document.getElementById("contact");

const optionResult = document.getElementById("option-result");
const cards = document.querySelector(".cards");
const optionResultTitle = document.querySelector(".card-title");
const optionResultDescription = document.querySelector(".card-description");
const browser = document.getElementById("card-display")

// MOSTRAR SECCION HOME
function displayHome() {
    browser.innerHTML ="";
    home.classList.replace("hidden", "active");

    instructions.classList.replace("active", "hidden");
    contact.classList.replace("active", "hidden");
    optionResult.classList.replace("active", "hidden");
    cards.innerHTML = "";
    optionResultTitle.textContent = "";
    optionResultDescription.textContent = "";
}
homeButton.addEventListener("click", displayHome);

// MOSTRAR SECCION INSTRUCTIONS
function displayInstructions() {
    browser.innerHTML ="";

    instructions.classList.replace("hidden", "active");

    home.classList.replace("active", "hidden");
    contact.classList.replace("active", "hidden");

    optionResult.classList.replace("active", "hidden");
    cards.innerHTML = "";
    optionResultTitle.textContent = "";
    optionResultDescription.textContent = "";
}
instructionsButton.addEventListener("click", displayInstructions);

// MOSTRAR SECCION CONTACT
function displayContact() {
    browser.innerHTML ="";

    contact.classList.replace("hidden", "active");

    instructions.classList.replace("active", "hidden");
    home.classList.replace("active", "hidden");

    optionResult.classList.replace("active", "hidden");
    cards.innerHTML = "";
    optionResultTitle.textContent = "";
    optionResultDescription.textContent = "";
}
contactButton.addEventListener("click", displayContact);



export {
    displayHome, displayInstructions, displayContact
}