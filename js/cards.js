"use strict";

class cards {
    constructor(photo, header, text) {
        this.photo = photo;
        this.header = header;
        this.text = text;
    }
    
}

let firstCard = new cards("Tajmahal.png", "Tajmahal", "The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal, who died on 17 June that year, while giving birth to their 14th child, Gauhara Begum.")
let secondCard = new cards("China-wall.jpg", "Chine Wall", "The Great Wall of China is the collective name of a series of fortification systems generally built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires against various nomadic groups of the steppe and their polities.")
let thirdCard = new cards("Pyramid.jpg", "Pyramids", "A pyramid is a structure whose outer surfaces are triangular and converge to a single step at the top, making the shape roughly a pyramid in the geometric sense. The base of a pyramid can be trilateral, quadrilateral, or of any polygon shape.")
let fourthCard = new cards("Tajmahal.png", "Tajmahal", "The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal, who died on 17 June that year, while giving birth to their 14th child, Gauhara Begum.")
let fifthCard = new cards("China-wall.jpg", "Chine Wall", "The Great Wall of China is the collective name of a series of fortification systems generally built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires against various nomadic groups of the steppe and their polities.")
let sixthCard = new cards("Pyramid.jpg", "Pyramids", "A pyramid is a structure whose outer surfaces are triangular and converge to a single step at the top, making the shape roughly a pyramid in the geometric sense. The base of a pyramid can be trilateral, quadrilateral, or of any polygon shape.")


let readCards ={
    getFullCard:function(){
        return [firstCard,secondCard,thirdCard,fourthCard,fifthCard,sixthCard];
    }
}