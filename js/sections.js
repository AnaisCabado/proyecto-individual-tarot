// VARIABLES SECCIONES
const homeButton = document.querySelector(".home-button");
const home = document.getElementById("option-buttons");
// const instructionsButton
// const instructions
// const contactButton
// const contact

function displayHome() {
    home.classList.add("active");
}
homeButton.addEventListener("click", displayHome)