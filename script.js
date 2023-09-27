// Function to create a new row with cells for the grid table
function addRow() {
    // Get a reference to the grid table
    var gridTable = document.getElementById('gridTable');

    // Create a new row
    var newRow = gridTable.insertRow();

    // Create a cell for the new row
    var cell = newRow.insertCell();
    cell.className = 'cell';

}

// Function to remove the most recent row from the grid table
function removeRow() {
    // Get a reference to the grid table
    var gridTable = document.getElementById('gridTable');

    // Check if there are any rows to remove
    if (gridTable.rows.length > 1) {
        // Remove the last row from the table
        gridTable.deleteRow(-1);
    }
}

// Add event listener for the "Add Row" button
var addRowButton = document.getElementById("addRowButton");
addRowButton.addEventListener("click", addRow);

// Add event listener for the "Remove Row" button
var removeRowButton = document.getElementById("removeRowButton");
removeRowButton.addEventListener("click", removeRow);
