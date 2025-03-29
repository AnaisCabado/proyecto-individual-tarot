import fetchData from "./api.js";

// VARIABLES OPCIONES TIRADAS
const button1 = document.querySelector(".button1");
const option1 = document.getElementById("option1")

// CAMBIO DE CLASE PARA TIRADA OPCION 1 PARA VISUALIZAR FORMULARIO
function cardOption1() {
    option1.classList.replace("hidden", "active");
}
button1.addEventListener("click", cardOption1);

const closeButton1 = document.getElementById("close-button-1");
function closeOption1() {
    option1.classList.replace("active", "hidden");
}
closeButton1.addEventListener("click", closeOption1);

