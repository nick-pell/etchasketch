let gridWidth = 16;
let gridHeight = 16;

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

}


drawGrid(gridWidth,gridHeight);

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener('mouseover',() => {
        box.classList.add('colored');

    });
});
