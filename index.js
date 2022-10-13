// Write your code here!
const main = document.getElementById("main");

main.remove();

const newHeader = document.createElement("h1");

newHeader.id = "victory"

newHeader.textContent = "KEVIN is the champion";

const body = document.querySelector('body')

body.append(newHeader);

//victory = document.getElementById("newHeader");

