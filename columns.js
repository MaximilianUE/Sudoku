
let column_PossibleValues = [];

/**
 * this section covers the columns
 **/

/**
 * GIVEN: ROW INDEX
 * WANT: ALL COLUMN VALUES
 * HAVE:
 */

function column_GetAllValues() {

    column_GivenValues = [];

    //input
    const columnIndex = 2;

    //check this one
    const column = document.querySelectorAll(`.column[data-column="${columnIndex}"]`);

    //loop
    for(i = 0; i < column.length; i++) {
        column_GivenValues.push(+column[i].innerHTML.trim());
    }

    //cleanup
    column_GivenValues.sort();

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

    console.log(column_PossibleValues);
    return column_PossibleValues;

}

