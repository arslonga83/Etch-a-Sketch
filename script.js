//reference container where the divs will go
const container = document.querySelector('.container');

//create the given number of divs
function createDivs (num) {
    for (i=1; i<=num; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('gridSquare');
        container.appendChild(newDiv);
    }
}

//call the function. eventually this will be paired with a prompt
createDivs(256);

//placeholder click listener for testing. need to switch this to hover effect
let divs = document.getElementsByClassName("gridSquare");

for (let i=0; i<divs.length; i++) {
    divs[i].addEventListener('click', () =>
    divs[i].style.background = 'black')
}