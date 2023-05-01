var randomNumber1a = Math.floor(Math.random() * 6) + 1;
//
var randomImageResource1 = "images/dice" + randomNumber1a + ".png";

var image1a = document.querySelectorAll("img")[0];

image1a.setAttribute("src", randomImageResource1);

var randomNumber2a = Math.floor(Math.random() * 6) + 1;
var randomImageResource2 = "images/dice" + randomNumber2a + ".png";
var image2a = document.querySelectorAll("img")[1];
image2a.setAttribute("src", randomImageResource2);

if (randomNumber1a > randomNumber2a) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1a < randomNumber2a) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
