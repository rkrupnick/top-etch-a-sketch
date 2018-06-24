const container = document.getElementById('grid-container'),
  clearGrid = document.getElementById('clear');

let grid = '',
    delegationSelector = '.square';

function createGrid(width) {
  grid = '';
  for (let i = 0; i < (width * width); i++) {
    grid += `<div style="width:${960/width}px;height:${960/width}px" class="square"></div>`;
  }
 container.innerHTML = grid;
}

container.addEventListener('mouseover', function(event) {
  event.target.style.backgroundColor = "orange";
});

clearGrid.addEventListener('click', function() {
  container.innerHTML = '';
  width = prompt('Enter a number:');
  createGrid(width);
});

createGrid(16);


