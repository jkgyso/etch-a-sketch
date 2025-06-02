console.log('Hello World!');

/*
    What do we know? 
    - we can create a single function that will create cols and rows 
    - we'll pass a parameter that includes the size of the grid  
    - create a separate element for columnDiv and rowDiv 
    - 
    - we can use a for loop to iterate the divs 
    - add a classList for the columns and rows 
    - add a width for the column 
    - add a height for the row 
    - append it to the gridContainer 

*/

const gridContainer = document.querySelector('#grid-squares-container');
const squaresButton = document.querySelector('button');
const randomColor = document.querySelector('input[name=random-color');


function createColumn(size) {

    for(let i = 0; i < size; i++) {
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('col');
        columnDiv.style.width = 600 / size + 'px';
        // columnDiv.textContent = `Col ${i}`
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
            // rowDiv.textContent = ``;
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

// function randomizeColor() {
//     let tiles = document.querySelectorAll('.grid-tile');
    
//     let r = () => {
//         return Math.floor(Math.random() * 256);
//     }

//     tiles.forEach(tile => {
//         tile.addEventListener('mouseenter', () => {
//             tile.style.backgroundColor = `rgb('${r}, ${r}, ${r}')`;
//         })
//     });
// }



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

squaresButton.addEventListener('click', addSquares);
// randomColor.addEventListener('change', randomizeColor);

/*
    Extra credit


Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.

Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.
    Hint: The opacity CSS property is useful here. To learn how to use it, check this MDN docs article about the opacity CSS property.


*/