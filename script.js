//reference container where the divs will go
const container = document.querySelector('.container');
const bwButton = document.querySelector('#bw');
const colorButton = document.querySelector('#color');

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
//createDivs(prompt('How many boxes wide do you want your square to be?'));

//hover effect is here
let divs = document.getElementsByClassName("gridSquare");

//for (let i=0; i<divs.length; i++) {
  //  divs[i].addEventListener('mouseover', () =>
    //divs[i].style.background = 'black') 
//}

bwButton.addEventListener('click', () => {
        while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
        createDivs(prompt('How many boxes wide do you want your square to be?'));
        
        for (let i=0; i<divs.length; i++) {
        divs[i].addEventListener('mouseover', () =>
        divs[i].style.background = 'black') 
    }
})

colorButton.addEventListener('click', () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createDivs(prompt('How many boxes wide do you want your square to be?'));
        
        for (let i=0; i<divs.length; i++) {
        divs[i].addEventListener('mouseover', () =>
        divs[i].style.background = 'black') 
    }
})


