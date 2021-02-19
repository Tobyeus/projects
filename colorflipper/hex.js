// Setting up the contents for hex colors
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Setting constants
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
// Button Event with function
btn.addEventListener('click', function() {
    // Start with #
    let hexColor = '#';
    // Loop for generated contents
    for(let i=0;i<6;i++){
        randomNumber = getRandomNumber();
        // Appending the hex content to hexColor
        hexColor += hex[randomNumber];
    }
    // Setting backgroundColor of Body and textContent of .colors
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})
// randomnumber generator
function getRandomNumber() {
    // generating number between 0 and 15
    return Math.floor(Math.random()*hex.length);
}