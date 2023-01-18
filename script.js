const container = document.querySelector('.container');
const button = document.querySelector('.btn');
cellCount = 16;
createGrid(cellCount);
button.addEventListener('click', resize);


function createGrid(cellCount) {
    for(let i = 0; i < (cellCount); i++) {
    const column = document.createElement('div');
    for(let j = 0; j < (cellCount); j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell')
        cell.setAttribute("style", `width: ${480/cellCount}px; height: ${480/cellCount}px`)
        column.appendChild(cell);
        cell.addEventListener('mouseover', hover)
    }
    container.appendChild(column);
    }
}

function hover(event) {
    event.target.style.backgroundColor = 'black';
}

function resize() {
    container.innerHTML = "";
    cellCount = Math.min(+(prompt("How many squares do you want on each side? ")), 100);
    createGrid(cellCount);
}
