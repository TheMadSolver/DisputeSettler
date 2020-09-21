var randomNumber1 = Math.floor(Math.random() * 6) + 1;


var randomDiceimage = "dice" + randomNumber1 + ".png";

var randomImagesrc =  randomDiceimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesrc);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceimage2 = "dice" + randomNumber2 + ".png";

var randomImagesrc2 = randomDiceimage2;

var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomImagesrc2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else if (randomNumber1 = randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
