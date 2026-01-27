import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const cardNumbers = ["A","2","3","4",
                      "5","6","7","8",
                      "9","10","J","Q","K"
  ];
  const cardSuits = [{suit: "♦", color: "red"},{suit: "♥", color: "red"}, {suit: "♠", color: "black"}, {suit: "♣", color: "black"}];
  //set the text.color equal to the key ("color")

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

let createCardValues = () => {

  const card = {}; //open object
  card.value = cardNumbers[getRandomIndex(cardNumbers)];
  let cardSuitSelect = cardSuits[getRandomIndex(cardSuits)]
  card.color = cardSuitSelect.color
  card.suit = cardSuitSelect.suit
  return card
}


  //write your code here
//♦ ♥ ♠ ♣

  console.log(createCardValues());
};


