const container = document.querySelector('.container');
const createDiv = document.createElement('div');
const button = document.querySelector('#getGridSize');

let gridSize = 16

button.addEventListener('click', () => {
    let gridSize = prompt('Enter how large you want the grid sides');
    const newGridSize = parseInt(gridSize)
    mainDiv(newGridSize);
    sub(newGridSize);
})

const divList = [];

function mainDiv(gridSize){
for(var i = 0; i<gridSize; i++){
    let divName = gridSize;
    divList.push(divName);
}}

function sub(gridSize) {divList.forEach(function (el){
    var div = document.createElement('div');
    for(var i=0;i<gridSize;i++){
        var subDiv = document.createElement('div');
        subDiv.classList.add(`${el}by${i}`)
        subDiv.innerText = '  -  '
        if(!div[subDiv]){
        div.appendChild(subDiv);}
        else{div.replaceChild(subDiv, subDiv)}
        hover(subDiv)
    }
    container.appendChild(div);
})}

function hover(element){
    element.addEventListener('mouseenter', () => {
        element.classList.add('active')
    })
}

mainDiv(gridSize);
sub(gridSize);