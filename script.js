let gridWidth = 16;
let gridHeight = 16;
let userInput = 0;
let selectedColor = 'blue';


const grid = document.querySelector('.grid');

function drawGrid(gridWidth, gridHeight){

for(let i = 0; i < gridHeight; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);
    for(let j = 0; j < gridWidth; j++){
        const box = document.createElement('div');
        box.classList.add('box');
        row.appendChild(box);
    }
}

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener('mouseover',() => {
        box.style.backgroundColor = selectedColor;

    });
});

}


drawGrid(gridWidth,gridHeight);


const sizeButton = document.querySelector('.size-button');
sizeButton.addEventListener('click', () => { 
        const div = document.getElementById("grid");
        div.replaceChildren();
        userInput = prompt('Enter grid size');
        while(userInput >= 100){
            userInput = prompt('Max size is 100. Re-enter Size');
        }
        drawGrid(userInput,userInput);
        
});

