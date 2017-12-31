/**
 * this section covers a single column
 *
 * GIVEN: COLUMN INDEX
 * WANT: ALL POSSIBLE VALUES FOR THIS COLUMN INDEX
 **/

let column_PossibleValues = [];

//input [var btwn 1 and grid-size(9)]
var columnIndex = 2;

function column_GetAllValues() {

    column_GivenValues = [];

    //check this one
    const column = document.querySelectorAll(`.column[data-column="${columnIndex}"]`);

    //loop
    for(i = 0; i < column.length; i++) {
        column_GivenValues.push(+column[i].innerHTML.trim());
    }

    //cleanup
    column_GivenValues.sort();

    column_GetAllPossibleValues();

    //output
    return column_PossibleValues;
}

/** GIVEN: column_GivenValues
*   WANT: column_PossibleValues **/
function column_GetAllPossibleValues() {

    //default check values
    column_PossibleValues = [1,2,3,4,5,6,7,8,9];

    //loop through column_GivenValues
    for (t = 1; t <= 9; t++) {

        if (column_GivenValues.includes(t)) {
            const remove = column_PossibleValues.indexOf(t);
            if (remove !== -1) {
                column_PossibleValues.splice(remove, 1);
            }
        }
    }

    //output
    return column_PossibleValues;
}
