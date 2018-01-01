/**
 * this section covers the main function
 **/

var gridIndex;
var rowIndex;
var columnIndex;

var solved = false;

function main() {

    getFields();
    field_getIndex();

    grid_GetAllValues(gridIndex);
    console.log("-----------------------");
    console.log("result grid");
    console.log(grid_PossibleValues);
    console.log("-----------------------");

    row_GetAllValues(rowIndex);
    console.log("-----------------------");
    console.log("result row");
    console.log(row_PossibleValues);
    console.log("-----------------------");

    column_GetAllValues(columnIndex);
    console.log("-----------------------");
    console.log("result column");
    console.log(column_PossibleValues);
    console.log("-----------------------");
*/
}

/** check all fields until the grid is solved **/
function getFields() {

    const field = document.querySelectorAll('.field');
    const feedback = document.getElementById('feedback');

    //while not solved
    while (!solved) {
    }

    feedback.innerText = "solved";
}

function field_getIndex(field) {

    gridIndex = field.getAttribute('data-grid');
    rowIndex = field.getAttribute('data-row');
    columnIndex = field.getAttribute('data-column');

    console.log(gridIndex);
    console.log(rowIndex);
    console.log(columnIndex);

}
