//Create a random number between 1-6
var randomNumber1 = Math.floor(Math.random()*6)+1;

//Assign the random number to the number of dice image
var randomDiceImage = "dice"+randomNumber1+".png";

var randomImageSourse = "images/"+randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSourse);

//Same procedure for the second dice
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSourse2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSourse2);

//Determine which player wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎉Player1 Wins!"
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🎉Player2 Wins!"
} else {
  document.querySelector("h1").innerHTML = "It's a tie!"
}
