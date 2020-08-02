"use strict";

let cardManager = {
    getAllCards: function () {
        return cards
    }
};

let domManger = {
    createCardContainer: function (product) {
        let mainBox = document.createElement("div");
        mainBox.className = "col-md-4 text-center box-list"
        mainBox.style.border = "2px solid #5d4954"
        mainBox.style.cursor = "pointer"
        mainBox.style.marginTop = "5%"
        mainBox.style.background = "rgba(255,255,255,0.6)"
        mainBox.style.paddingBottom = "2%"


        let cardImage = document.createElement("img");
        cardImage.src = "images/" + product.photo;
        cardImage.style.width = "300px";
        cardImage.style.height = "300px";
        cardImage.style.marginTop = "5%";
        cardImage.style.transition = "all 0.4s linear";
        mainBox.appendChild(cardImage);

        let boxContent = document.createElement("h3");
        boxContent.innerHTML="Read More";
        boxContent.className = "box-content";
        boxContent.style.color = "#fff"
        boxContent.style.width = "100%"
        mainBox.appendChild(boxContent)

        let cardHeader = document.createElement("h1");
        cardHeader.innerHTML = product.header;
        mainBox.appendChild(cardHeader);

        let cardText = document.createElement("p1")
        cardText.innerHTML = product.text;
        cardText.style.marginBottom = "20px";
        mainBox.appendChild(cardText);

        return mainBox
    }
};