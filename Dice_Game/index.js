var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "images/dice" + randomNum1 + ".png";
var image1 =  document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);
// Player 2 setup
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNum2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);
//player3 setup
var randomNum3 = Math.floor(Math.random() * 6) + 1;
var randomImage3 = "images/dice" + randomNum3 + ".png";
var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src", randomImage3);

if(randomNum1 > randomNum2&&randomNum1 > randomNum3)
{
document.querySelector("h1").innerHTML = "Player 1 Wins !"
}
else if (randomNum2 > randomNum1&&randomNum2 > randomNum3 )
{
  document.querySelector("h1").innerHTML = "Player 2 Wins !"
}
else if (randomNum3 > randomNum1&&randomNum3 > randomNum2 )
{
  document.querySelector("h1").innerHTML = "Player 3 Wins !"
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}
