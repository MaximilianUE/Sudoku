/**
 * this section covers a single row
 *
 * GIVEN: ROW INDEX
 * WANT: ALL POSSIBLE VALUES FOR THIS ROW INDEX
 **/

let row_PossibleValues = [];

function row_GetAllValues(rowIndex) {

    row_GivenValues = [];

    //check this one
    const row = document.querySelectorAll(`.field[data-row="${rowIndex}"]`);

    //loop
    for(var i = 0; i < row.length; i++) {
        row_GivenValues.push(+row[i].value.trim());
    }

    //cleanup
    row_GivenValues.sort();

    row_GetAllPossibleValues();

    //output
    return row_PossibleValues;
}

/** GIVEN: row_GivenValues
*   WANT: row_PossibleValues **/
function row_GetAllPossibleValues() {

    //default check values
    row_PossibleValues = [1,2,3,4,5,6,7,8,9];

    //loop through row_GivenValues
    for (var t = 1; t <= 9; t++) {

        if (row_GivenValues.includes(t)) {
            const remove = row_PossibleValues.indexOf(t);
            if (remove !== -1) {
                row_PossibleValues.splice(remove, 1);
            }
        }
    }

    //output
    return row_PossibleValues;
}
