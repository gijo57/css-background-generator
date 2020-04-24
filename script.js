var colors = document.querySelectorAll("input");
var color1 = colors[0];
var color2 = colors[1];
var currentBackgroundText = document.querySelector("h3");
var body = document.querySelector("body");
var randButton = document.getElementById("random");
var gradDirections = document.getElementById("dropdown");

function setColor() {
    var gradDirection = gradDirections.value;
    body.style.background = "linear-gradient(to " + gradDirection.toLowerCase() + ", " + color1.value + ", " + color2.value + ") fixed center";
    currentBackgroundText.innerText = "linear-gradient(to " + gradDirection.toLowerCase() + ", " + color1.value + ", " + color2.value + ") fixed center;";
}

function randomizeBackground() {
    color1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
    color2.value = '#'+Math.floor(Math.random()*16777215).toString(16);
    setColor();
}

function getGradDirection() {
    return gradDirection = event.target.value;
}

body.onload = setColor;
color1.addEventListener("change", setColor);
color2.addEventListener("change", setColor);
randButton.addEventListener("click", randomizeBackground);
gradDirections.addEventListener("change", setColor);