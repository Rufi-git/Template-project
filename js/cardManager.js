

document.addEventListener("DOMContentLoaded", function () {
    let allCards = cardManager.getAllCards();
    if ("length" in allCards) {
        for (let card of allCards) {
            let cardContainer = domManger.createCardContainer(card);
            document.getElementById("cardLists").appendChild(cardContainer);
        }
    } else {
        let cardContainer =domManger.createCardContainer(allCards);
        document.getElementById("cardLists").appendChild(cardContainer);
    }

})