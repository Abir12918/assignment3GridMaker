// Mahathir's Funcs 
let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');
let color = colorInput.value;
console.log(color);


// colorInput.addEventListener('input', () => {

//     hexInput.value = color;
//     var gridTable = document.getElementById('gridTable');
//     cell.style.backgroundColor = color;
//     console.log(cell.style.backgroundColor);
// });

//change color to help make color wheel work.
const chosenColor = document.querySelector("#color");
chosenColor.addEventListener('input', () => { color = chosenColor.value;
chosenColor.style.cssText = `background-color: ${color}`;});

function updateColored () 
{
    var gridTable = document.getElementById('gridTable');
    var cells = gridTable.querySelectorAll('.cell');
        for (var i = 0; i < cells.length; i++) 
        {
            if (cells[i].style.backgroundColor != ""){
                cells[i].style.backgroundColor = color
            }
        }
}

function updateUncolored()
{
    var gridTable = document.getElementById('gridTable');
    var cells = gridTable.querySelectorAll('.cell');
        for (var i = 0; i < cells.length; i++) 
        {
            if (cells[i].style.backgroundColor === ""){
                cells[i].style.backgroundColor = color
            }
        }
}

function clearCells()
{
    var gridTable = document.getElementById('gridTable');
    var cells = gridTable.querySelectorAll('.cell');
        for (var i = 0; i < cells.length; i++) 
        {
            cells[i].style.backgroundColor = ""

        }
}

function changeColor(event) {
    // Check if the clicked element is a cell
    if (event.target.classList.contains('cell')) {
        event.target.style.backgroundColor = color;
    }
}

function colorCellsInDirection(cell, direction) {
    // Get the current cell's background color
    var currentColor = cell.style.backgroundColor;

    // Check if the cell is already filled with the selected color
    if (currentColor === color) {
        return;
    }

    // Set the background color of the current cell
    cell.style.backgroundColor = color;

    // Get the row and cell index of the current cell
    var rowIndex = cell.parentNode.rowIndex;
    var cellIndex = cell.cellIndex;

    // Define positions for adjacent cells based on the chosen direction
    var positions = [];
    switch (direction) {
        case 'above':
            positions = [{ x: 0, y: -1 }];
            break;
        case 'below':
            positions = [{ x: 0, y: 1 }];
            break;
        case 'left':
            positions = [{ x: -1, y: 0 }];
            break;
        case 'right':
            positions = [{ x: 1, y: 0 }];
            break;
        case 'all':
            positions = [{ x: 0, y: -1 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 1, y: 0 }];
            break;
        default:
            break;
    }

    for (var i = 0; i < positions.length; i++) {
        var dx = positions[i].x;
        var dy = positions[i].y;

        // Calculate the coordinates of the adjacent cell
        var newX = cellIndex + dx;
        var newY = rowIndex + dy;

        // Check if the adjacent cell is within the grid bounds
        if (
            newX >= 0 &&
            newX < cell.parentNode.cells.length &&
            newY >= 0 &&
            newY < cell.parentNode.parentNode.rows.length
        ) {
            var adjacentCell = cell.parentNode.parentNode.rows[newY].cells[newX];

            // Set the background color of the adjacent cell
            adjacentCell.style.backgroundColor = color;
        }
    }
}


// Modify the changeColor function to call the colorCellsInDirection function
function changeColor2(event) {
    // Check if the clicked element is a cell
    if (event.target.classList.contains('cell')) {
        var direction = 'all'; // Default to coloring all adjacent cells
        // You can set the 'direction' variable based on user input here.
        colorCellsInDirection(event.target, direction);
    }
}


// Function to update the selected color and hex value
function updateColor() {
    color = colorInput.value;
    hexInput.value = color;
}

// Add event listener to the color input to track color changes
colorInput.addEventListener('input', updateColor);




var gridTable = document.getElementById('gridTable');
gridTable.addEventListener('click', changeColor);

// Rest of your code for adding/removing rows and columns...
// Function to create a new row with cells for the grid table
// Function to create a new row with cells for the grid table
// Function to create a new row with cells for the grid table
function addRow() {
    // Get a reference to the grid table
    var gridTable = document.getElementById('gridTable');

    if (gridTable.rows.length === 0) {
        // If there are no rows, create a new row with cells
        var newRow = gridTable.insertRow();
        var cell = newRow.insertCell();
        cell.className = 'cell';
        cell.addEventListener('click', () => changeColor(cell));
    } else {
        // Clone the first row to create a new row
        var firstRow = gridTable.rows[0];
        var newRow = firstRow.cloneNode(true);

        // Reset the background color of all cells in the new row
        var cells = newRow.querySelectorAll('.cell');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = '';
        }

        // Append the new row to the table
        gridTable.appendChild(newRow);
    }
}



// Function to remove the most recent row from the grid table
function removeRow() {
    // Get a reference to the grid table
    var gridTable = document.getElementById('gridTable');

    // Check if there are any rows to remove
    if (gridTable.rows.length > 0) {
        // Remove the last row from the table
        gridTable.deleteRow(-1);
    }
}

// Function to add a new column to the grid table
function addColumn() {
    // Get a reference to the grid table
    var gridTable = document.getElementById('gridTable');

    // Create a new cell in each row if there are no rows
    if (gridTable.rows.length === 0) {
        var newRow = gridTable.insertRow();
        var cell = newRow.insertCell();
        cell.className = 'cell';


    } else {
        // Otherwise, add a new cell to each existing row
        for (var i = 0; i < gridTable.rows.length; i++) {
            var cell = gridTable.rows[i].insertCell();
            cell.className = 'cell';

        }
    }
}

// Function to remove the most recent column from the grid table
function removeColumn() {
    // Get a reference to the grid table
    var gridTable = document.getElementById('gridTable');

    // Check if there are any cells in the first row
    if (gridTable.rows.length > 0 && gridTable.rows[0].cells.length > 0) {
        // Remove the last cell from each row
        for (var i = 0; i < gridTable.rows.length; i++) {
            gridTable.rows[i].deleteCell(-1);
        }
    }
}

// Add event listener for the "Add Row" button
var addRowButton = document.getElementById("addRowButton");
addRowButton.addEventListener("click", addRow);

// Add event listener for the "Remove Row" button
var removeRowButton = document.getElementById("removeRowButton");
removeRowButton.addEventListener("click", removeRow);

// Add event listener for the "Add Column" button
var addColumnButton = document.getElementById("addColumnButton");
addColumnButton.addEventListener("click", addColumn);

// Add event listener for the "Remove Column" button
var removeColumnButton = document.getElementById("removeColumnButton");
removeColumnButton.addEventListener("click", removeColumn);


