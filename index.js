/**
 * this section covers the main function
 **/

var gridIndex;
var rowIndex;
var columnIndex;

var solved = false;

function main() {

    getFields();
/* 
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
function solve() {

    const field = document.querySelectorAll('.field');
    const feedback = document.getElementById('feedback');

    //while not solved
    while (!solved) {

        //if runs completely without interruption end the program.
        feedback.innerText = "running";
        solved = true;

        for(var i = 0; i < field.length; i++) {

            //is field not set?
            if (field[i].innerText === "") {

                field_getIndex(field[i]);

            }

        }

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
