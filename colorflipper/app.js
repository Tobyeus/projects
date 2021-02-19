const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // Setting a random number for the colors array
    const randomNumber = getRandomNumber();
    // Targeting the Body with document.body and with .stlye.backgroundColor the backgroundcolor value of body
    document.body.style.backgroundColor = colors[randomNumber]; 
    // Changing the Textcontent of Spanelement .color
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}