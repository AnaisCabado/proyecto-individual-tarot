const contactFormSubmit = document.querySelector(".contact__form-submit");

contactFormSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    formToLocalStorage();
})

function formToLocalStorage() {
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

    localStorage.setItem('data', JSON.stringify(data));

    alert("Your session has succesfully been saved.");
}

if (localStorage.length > 0) {
    const contactDates = document.querySelector(".contact__dates");
    let contactDatesCard = document.createElement("div");
    contactDatesCard.classList.add("contact__dates-card")
    let contactDate = document.createElement("div");
    contactDate.classList.add("contact-date");

    let datePerson = document.createElement("p");
    datePerson.textContent = `${JSON.parse(localStorage.data).name} ${JSON.parse(localStorage.data).surname}`;
    let dateDate = document.createElement("p");
    dateDate.textContent = `${JSON.parse(localStorage.data).date}`;
    let dateTarotSpecialist = document.createElement("p");
    dateTarotSpecialist.textContent = `${JSON.parse(localStorage.data).tarotSpecialist}`;

    let contactDateDelete = document.createElement("button");
    contactDateDelete.classList.add("contact-date-delete");
    contactDateDelete.textContent = "DELETE";

    contactDate.append(datePerson, dateDate, dateTarotSpecialist, contactDateDelete);
    contactDatesCard.appendChild(contactDate);
    contactDates.appendChild(contactDatesCard);

    contactDateDelete.addEventListener("click", () => {
        localStorage.clear();
        contactDatesCard.innerHTML = "";
    })
}

export {
    formToLocalStorage
}