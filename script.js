//reference container where the divs will go
const container = document.querySelector('.container');

//create the given number of divs
function createDivs (num) {
    for (i=1; i<=num*num; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('gridSquare');
        let divSize = 480 / num;
        newDiv.style.width = divSize + "px";
        newDiv.style.height = divSize + "px";
        container.appendChild(newDiv);
    }
}

//prompt for grid size
createDivs(prompt('How many boxes wide do you want your square to be?'));

//hover effect is here
let divs = document.getElementsByClassName("gridSquare");

for (let i=0; i<divs.length; i++) {
    divs[i].addEventListener('mouseover', () =>
    divs[i].style.background = 'black') 
    
}