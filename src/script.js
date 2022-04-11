const figure = document.querySelector('.figure');
const figureSelect = document.querySelector('#figure_select');

let figureChosen = '';
figureSelect.addEventListener('change', (event) => {
    figureChosen = event.target.value;
    figure.className = figureChosen;
    figureColor();
})

const btn = document.querySelector('.btn');
const colorChoice = document.querySelector('#color');
let color = '#000000';

btn.addEventListener('click', () => {
    color = colorChoice.value;
    figureColor();
})

function figureColor() {
    if (figureChosen === '') {
        figure.style.background = 'transparent';
    } else {
        figure.style.background = color;
    }
}



