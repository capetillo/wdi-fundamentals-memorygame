var cards = [
{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];

// array for cardsInPlay

var cardsInPlay = [];

// var chosenCards = document.getElementsByClassName("chosen");

// var flipBack = function () {
  //for (var i = 0; i < chosenCards.length; i += 1) {
    //chosenCards[i].setAttribute('src', "images/back.png");
 // }
// };

var checkForMatch = function() {
  // if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  };
};

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  console.log(cardId);

  // add card to array of cardsinplay 
 

  cardsInPlay.push(cards[cardId].rank);

  // display card image

  this.setAttribute('src', cards[cardId].cardImage);

  // show image

  console.log(cards[cardId].cardImage);

  // display suit 

  console.log(cards[cardId].suit);
  
 
  if (cardsInPlay.length === 2) {
    checkForMatch();
  


    // cardsInPlay = [];
  };
};




var createBoard = function() {

 var cardTable = document.getElementById('game-board');

  for (var i = 0; i < cards.length; i++) {

  var cardElement = document.createElement('img');
  cardElement.setAttribute('src', "images/back.png");
  cardElement.setAttribute('data-id', i);

  // listen when user clicks
  cardElement.addEventListener('click', flipCard);

  // card goes on board
  document.getElementById('game-board').appendChild(cardElement);

  }
};


// var startOver = function () {
  // score = 0;
 // document.getElementById('score').textCContent = score;
 // result.textContent = "Let's play again!";
  //flipBack();
// }

createBoard();





