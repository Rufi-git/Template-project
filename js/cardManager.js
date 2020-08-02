"use strict";

document.addEventListener("DOMContentLoaded", function () {
    let allCards = cardManager.getAllCards();
    for (let card of allCards) {
        let cardContainer = domManger.createCardContainer(card);
        document.getElementById("cardLists").appendChild(cardContainer);
    }
})