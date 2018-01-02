/**
 * this section covers the main function
 **/

var gridIndex;
var rowIndex;
var columnIndex;

var solved = false;

let field_PossibleValues = [];

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

                //get possible Values
                grid_GetAllValues(gridIndex);
                row_GetAllValues(rowIndex);
                column_GetAllValues(columnIndex);

                //add to field_possibleValues
                field_getAllPossibleValues(field[i]);

            }

        }

    }

    feedback.innerText = "solved";
}

function field_getIndex(field) {

    gridIndex = field.getAttribute('data-grid');
    rowIndex = field.getAttribute('data-row');
    columnIndex = field.getAttribute('data-column');

}


function field_getAllPossibleValues(field) {


    field_PossibleValues = [];

    for (var t = 1; t <= 9; t++) {

        if (grid_PossibleValues.includes(t) &&
            row_PossibleValues.includes(t) &&
            column_PossibleValues.includes(t)) {

            field_PossibleValues.push(t);
        }

    }

    if(field_PossibleValues.length === 1) {
        field.innerText = field_PossibleValues;
    }
}
