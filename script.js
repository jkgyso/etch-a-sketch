const gridContainer = document.querySelector('#grid-squares-container');
const squaresButton = document.querySelector('button');
const randomColor = document.querySelector('input[name=random-color]');
const opacityCheckbox = document.querySelector('input[name=opacity]')
const reset = document.querySelector('#reset');


function createColumn(size) {

    for(let i = 0; i < size; i++) {
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('col');
        columnDiv.style.width = 600 / size + 'px';
        gridContainer.appendChild(columnDiv);
        
    }
}



function createRow(size) {
    let columns = document.querySelectorAll('.col');

    for(let i = 0; i < size; i++) {
        for(let j = 0; j < columns.length; j++) {
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            rowDiv.classList.add('grid-tile');
            rowDiv.style.height = 600 / size + 'px';
            columns[j].appendChild(rowDiv);
        }
    }
}

createColumn(16);
createRow(16);




function addHoverEffect() {
    let tiles = document.querySelectorAll('.grid-tile');
    tiles.forEach(tile => {
        tile.addEventListener('mouseenter', () => {
            tile.style.backgroundColor = 'yellow';
        })
    })
}

addHoverEffect();






function removeSquares() {
    let child = gridContainer.lastElementChild;
    
    while(child) {
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    }
}

function addSquares() {
    let numberOfSquares = Number(prompt(`Please enter number of squares`));

    removeSquares();

    createColumn(numberOfSquares);
    createRow(numberOfSquares);
    randomizeColor();
    addHoverEffect();
    
} 


function randomizeColor() {
    let tiles = document.querySelectorAll('.grid-tile');
    let randomCheckbox =  randomColor;
    

    tiles.forEach(tile => {
        tile.addEventListener('mouseenter', () => {

            if(randomCheckbox.checked) {
                 let hex = '#' + Math.floor(Math.random()*16777215).toString(16);

            tile.style.backgroundColor = `${hex}`;
            } else {
                tile.style.backgroundColor = 'yellow';
            }

           
        })

    });

}

function increaseOpacity() {
    let tiles = document.querySelectorAll('.grid-tile');
    let opacity = opacityCheckbox;

        tiles.forEach(tile => {
            tile.addEventListener('mouseenter', () => {

            if(opacity.checked) {
                 let currentOpacity = parseInt(tile.dataset.opacity) || 0;

                 currentOpacity = Math.min(currentOpacity + 10, 100);

                 tile.dataset.opacity = currentOpacity;
                 tile.style.opacity = currentOpacity / 100; 

            } else {
                tile.style.opacity = '';
                tile.dataset.opacity = 0;
            }
           
        })

    });

}

function resetColors() {
    let tiles = document.querySelectorAll('.grid-tile');

    tiles.forEach(tile => {
        tile.style.backgroundColor = '';
        tile.style.opacity = '';
    })
} 

squaresButton.addEventListener('click', addSquares);
randomColor.addEventListener('change', randomizeColor);
reset.addEventListener('click', resetColors);
opacityCheckbox.addEventListener('change', increaseOpacity);
