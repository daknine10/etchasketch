const container = document.querySelector('.container');

let isDown = false;

function createGrid(size) {
    for (let i = 1; i < size*size+1; i++) {
        const grid = document.createElement('div');
        grid.className = 'grid';
        grid.style.height = `${800/size}px`
        grid.style.width = `${800/size}px`
        grid.style.opacity = 0.1;
        container.appendChild(grid)
        grid.addEventListener('mouseover', () => {
            if (isDown) {
                var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                if (grid.style.backgroundColor === '') {
                    grid.style.backgroundColor = `${randomColor}`
                }
                else {
                grid.style.opacity = parseFloat(grid.style.opacity) + 0.1;
                }
            }});
        grid.addEventListener('mouseup', () => {
            isDown = false;
        })
        grid.addEventListener('mousedown', () => {
            isDown = true
        })
    }
}

const changeGridSize = document.querySelector('.change');

changeGridSize.addEventListener('click', () => {
    while (true) {
        let gridSize = parseInt(prompt("Enter the grid size (1-100):"));
        if (!gridSize) {
            return false
        }
        if (gridSize > 0 && gridSize < 101) {
            container.textContent = ''
            return createGrid(gridSize)
        }
}})

const catButton = document.querySelector('.button');
catButton.addEventListener('click', () => {
    const cat = document.createElement('img');
    cat.setAttribute('src', 'https://i.pinimg.com/736x/13/69/ac/1369ac541a9a8601c83212ead9a67343.jpg')
    container.textContent = ''
    container.appendChild(cat);
})

createGrid(16)