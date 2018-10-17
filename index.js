/* Enter the code to remove the main node element under this comment */
document.querySelector('#main').remove()

/* Create your new element here and assign it to newHeader */
const newHeader = null;
let newHeader = document.createElement('h1');
newHeader.innerText = "Jesse is the champion!";
let div = document.querySelector('#victory');
div.appendChild(newHeader);