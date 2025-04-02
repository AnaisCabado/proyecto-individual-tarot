const contactFormSubmit = document.querySelector(".contact__form-submit");

function formToLocalStorage() {
    contactFormSubmit.addEventListener("click", (e) => {
        e.preventDefault();
    })

    let name = document.querySelector(".contact__form-questions #name").value;
    let surname = document.querySelector(".contact__form-questions #surname").value;
    let date = document.querySelector(".contact__form-questions #date").value;
    let tarotSpecialist = document.querySelector(".contact__form-questions #tarot-specialist").value;

    let data = {
        name: name,
        surname: surname,
        date: date,
        tarotSpecialist: tarotSpecialist
    }

    localStorage.setItem("data", JSON.stringify(data));

    alert("Data saved in local storage.")
}

export {
    formToLocalStorage
}