function typeEffect(element, speed) {
    let cardTitleSplit = cardTitle.textContent.split("");
    console.log(cardTitleSplit)
    for(let i = 0; i < element.length; i++) {

    }
    // let i = 0;
    // function typing() {
    //     if (i < text.length) {
    //         element.textContent += text[i];
    //         i++;
    //         setTimeout(typing, speed);
    //     }
    // }
    // typing();
}

// Uso:
const cardTitle = document.querySelector(".card-title");
typeEffect(cardTitle, 100);

export {
    typeEffect
}
