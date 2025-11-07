const container = document.getElementById('container');
const gridSizeBtn = document.getElementById('grid-size-btn');
const resetBtn = document.getElementById('reset-btn');

let currentSize = 16;
let isMouseDown = false;

// Initialize grid
createGrid(currentSize);

// Event listeners for drawing
container.addEventListener('mousedown', () => isMouseDown = true);
container.addEventListener('mouseup', () => isMouseDown = false);
container.addEventListener('mouseleave', () => isMouseDown = false);

// Grid size button
gridSizeBtn.addEventListener('click', () => {
    const newSize = prompt('Enter number of squares per side (max 100):', currentSize);
    if (newSize && newSize <=100 && newSize >0){
        currentSize = parseInt(newSize);
        createGrid(currentSize);
    }
});

// Reset button
resetBtn.addEventListener('click', () => createGrid(currentSize));

function createGrid(size) {
    // Clear any existing grid squares from the container
    container.innerHTML = '';
    // Total container width (960px) divided by number of squares per row
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        // Create a new div element for each grid square 
        const square = document.createElement('div');

        // Add CSS class for styling
        square.classList.add('grid-square');

        // Set the dimensions of the square using calculated size
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;        

        // For Single Click drawing
        square.addEventListener('mousedown', () => {
            square.style.backgroundColor = getRandomColor();
        });

        // For Hover drawing
        square.addEventListener('mouseover', () => {
            if (isMouseDown) {
                square.style.backgroundColor = getRandomColor();
            }
        });
        
        // Add the completed square to the grid container
        container.appendChild(square);
    }
}

function getRandomColor() {
    // Generate random values for red, green, and blue (0-255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}