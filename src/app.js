import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const cardNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const cardSuits = [
    { suit: "♦", color: "red" },
    { suit: "♥", color: "red" },
    { suit: "♠", color: "black" },
    { suit: "♣", color: "black" },
  ];
  //set the text.color equal to the key ("color")
  console.log("onload working");
  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  const createCardValues = () => {
    const card = {}; //open object
    card.value = cardNumbers[getRandomIndex(cardNumbers)];
    let cardSuitSelect = cardSuits[getRandomIndex(cardSuits)];
    card.color = cardSuitSelect.color;
    card.suit = cardSuitSelect.suit;
    return card;
  };

  const createNewCard = () => {
    const card = createCardValues(); //create a random card
    const cardNumColor = document.querySelectorAll(".cardNum");
    const suitColor = document.querySelectorAll(".suit");
    const newCardButton = document.querySelectorAll(".refreshButton");

    cardNumColor.forEach((element) => {
      element.style.color = card.color;
      element.textContent = card.value;
    });
    suitColor.forEach((element) => {
      element.style.color = card.color;
      element.textContent = card.suit;
    });
  };
  const refreshButton = document.querySelector(".refreshButton");
  refreshButton.addEventListener("click", createNewCard);

  createNewCard();
};
