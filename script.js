// Function to create a new row with cells for the grid table
function addRow() {
    // Get a reference to the grid table
    var gridTable = document.getElementById('gridTable');

    // Create a new row if there are no rows
    if (gridTable.rows.length === 0) {
        var newRow = gridTable.insertRow();
        var cell = newRow.insertCell();
        cell.className = 'cell';
    } else {
        // Clone the first row to create a new row
        var firstRow = gridTable.rows[0];
        var newRow = firstRow.cloneNode(true);
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
