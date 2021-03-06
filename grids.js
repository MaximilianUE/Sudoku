/**
 * this section covers a single grid
 *
 * GIVEN: GRID INDEX
 * WANT: ALL POSSIBLE VALUES FOR THIS GRID INDEX
 **/

let grid_PossibleValues = [];

function grid_GetAllValues(gridIndex) {

    grid_GivenValues = [];

    //check this one
    const grid = document.querySelectorAll(`.field[data-grid="${gridIndex}"]`);

    //loop
    for(var i = 0; i < grid.length; i++) {
        grid_GivenValues.push(+grid[i].value.trim());
    }

    //cleanup
    grid_GivenValues.sort();

    grid_GetAllPossibleValues();

    //output
    return grid_PossibleValues;
}

/** GIVEN: grid_GivenValues
*   WANT: grid_PossibleValues **/
function grid_GetAllPossibleValues() {

    //default check values
    grid_PossibleValues = [1,2,3,4,5,6,7,8,9];

    //loop through grid_GivenValues
    for (var t = 1; t <= 9; t++) {

        if (grid_GivenValues.includes(t)) {
            const remove = grid_PossibleValues.indexOf(t);
            if (remove !== -1) {
                grid_PossibleValues.splice(remove, 1);
            }
        }
    }

    //output
    return grid_PossibleValues;
}
