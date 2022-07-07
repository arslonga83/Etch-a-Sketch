//elements referenced from html
const container = document.querySelector('.container');
const bwButton = document.querySelector('#bw');
const colorButton = document.querySelector('#color');
let divs = document.getElementsByClassName("gridSquare");

//create the given number of divs
function createDivs (num) {
    for (i=1; i<=num*num; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('gridSquare');
        //these lines make the new squares fit into the container
        let divSize = 480 / num;
        newDiv.style.width = divSize + "px";
        newDiv.style.height = divSize + "px";
        container.appendChild(newDiv);
    }
}

//return a random rgb value for use by the color button
function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return ('rgb('+r+', '+g+', '+b+')');
}

bwButton.addEventListener('click', () => {
        while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
        createDivs(prompt('How many boxes wide do you want your square to be? (Pick a number lower than 100.)'));
        
        for (let i=0; i<divs.length; i++) {
        divs[i].addEventListener('mouseover', () =>
        divs[i].style.background = 'black') 
    }
})

colorButton.addEventListener('click', () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
    }
        createDivs(prompt('How many boxes wide do you want your square to be? (Pick a number lower than 100.'));
        
        for (let i=0; i<divs.length; i++) {
        divs[i].addEventListener('mouseover', () =>
        divs[i].style.background = randomColor()) 
    }
})
