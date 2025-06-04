const gridContainer = document.querySelector('#grid-squares-container');
const squaresButton = document.querySelector('button');
const randomColor = document.querySelector('input[name=random-color]');
const opacityCheckbox = document.querySelector('input[name=opacity]')
const reset = document.querySelector('#reset');


function createColumn(size) {

        const containerWidth = gridContainer.clientWidth;

    for(let i = 0; i < size; i++) {
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('col');
        columnDiv.style.width = 800 / size + 'px';
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
            rowDiv.style.height = 800 / size + 'px';
            columns[j].appendChild(rowDiv);
        }
    }
}




function setupHoverEffects() {
    let tiles = document.querySelectorAll('.grid-tile');
    
    tiles.forEach(tile => {
        let newTile = tile.cloneNode(true);
        tile.parentNode.replaceChild(newTile, tile);
    });
    
    tiles = document.querySelectorAll('.grid-tile');
    
    tiles.forEach(tile => {
        tile.addEventListener('mouseenter', () => {
            if (opacityCheckbox.checked) {
                let currentOpacity = parseInt(tile.dataset.opacity) || 0;
                currentOpacity = Math.min(currentOpacity + 10, 100);
                tile.dataset.opacity = currentOpacity;
                tile.style.opacity = currentOpacity / 100;
            }
            
            if (randomColor.checked) {
                let hex = '#' + Math.floor(Math.random()*16777215).toString(16);
                tile.style.backgroundColor = hex;
            } else {
                tile.style.backgroundColor = 'yellow';
            }
        });
    });
}



function removeSquares() {
    let child = gridContainer.lastElementChild;
    
    while(child) {
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    }
}

function addSquares() {
    let numberOfSquares = Number(prompt(`Please enter number of squares`));

    if(isNaN(numberOfSquares) || numberOfSquares <= 0 ||    numberOfSquares > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return; 
    }

    removeSquares();
    createColumn(numberOfSquares);
    createRow(numberOfSquares);
    randomizeColor();
    setupHoverEffects();
    
} 


function resetColors() {
    let tiles = document.querySelectorAll('.grid-tile');
    tiles.forEach(tile => {
        tile.style.backgroundColor = '';
        tile.style.opacity = '';
        tile.dataset.opacity = '0';
        opacityCheckbox.checked = false;
        randomColor.checked = false;

    });
} 


createColumn(16);
createRow(16);
setupHoverEffects();

squaresButton.addEventListener('click', addSquares);
randomColor.addEventListener('change', setupHoverEffects);
opacityCheckbox.addEventListener('change', setupHoverEffects);
reset.addEventListener('click', resetColors);