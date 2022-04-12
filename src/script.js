const figure = document.querySelector('.figure');
const figureSelect = document.querySelector('#figure_select');
let figureChosen = '';

figureSelect.addEventListener('change', (event) => {
    figureChosen = event.target.value;
    figure.className = figureChosen;
    changeFigureColor(colorChoice.value);
})

const applyColorBtn = document.querySelector('.apply_color_btn');
const colorChoice = document.querySelector('#color');

applyColorBtn.addEventListener('click', () => {
    changeFigureColor(colorChoice.value);
})

function changeFigureColor(color = '#000000') {
    if (figureChosen === '.oval') {
        figure.style.background = 'transparent';
    } else {
        figure.style.background = color;
    }
}

