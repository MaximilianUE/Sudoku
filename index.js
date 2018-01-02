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

    /*
    console.log(grid_PossibleValues);

    //loop through grid_GivenValues
    for (var g = 0; g < grid_PossibleValues.length; g++) {

      field_PossibleValues.push(+grid_PossibleValues[g])

    }

    console.log("-----------------------");
    console.log("result:");
    console.log(field_PossibleValues);


    console.log("row");
    console.log(row_PossibleValues);
    //loop through row_GivenValues
    for (g = 0; g < row_PossibleValues.length; g++) {

        field_PossibleValues.push(+row_PossibleValues[g]);
        field_PossibleValues.push(+8);

    }

    console.log("-----------------------");
    console.log("result:");
    console.log(field_PossibleValues);

*/




    /*
    for (var r = 0; r <= row_PossibleValues; r++) {

        const check = field_PossibleValues.indexOf(r);
        if (check === -1) {
            field_PossibleValues.push(row_PossibleValues[r])
        }

    }

    for (var c = 0; c <= column_PossibleValues; c++) {

        const check = field_PossibleValues.indexOf(c);
        if (check === -1) {
            field_PossibleValues.push(column_PossibleValues[c])
        }



    }

        /*

        if ( (grid_PossibleValues.includes(t) && row_PossibleValues.includes(t)) ||
             (grid_PossibleValues.includes(t) && column_PossibleValues.includes(t)) ||
             (row_PossibleValues.includes(t) && column_PossibleValues.includes(t)) ) {
            const remove = field_PossibleValues.indexOf(t);
            console.log(remove);
            if (remove !== -1) {
                field_PossibleValues.splice(remove, 1);
            }
        }
    }
    */
}

