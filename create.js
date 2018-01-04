/**
 * this section covers the grid creation
 **/

var random;

const field = document.querySelectorAll('.field');

function createGame() {

    hardReset();

    create_fillInGrid(1);
    create_fillInGrid(2);
    create_fillInGrid(3);
    create_fillInGrid(4);
    create_fillInGrid(8);
    create_fillInGrid(9);

   for (var i = 1; i <= 10; i++) {
        create_fillOneRandomField();
    }

    create_checkIfSolveable();

}

//check if solvable
function create_checkIfSolveable() {
    solveGame();
    checkIfSolvedIsDone();
    console.log(solved);
    if (solved === false) {
        createGame();
    }
}

function create_fillInGrid(gridIndex) {

    //select all possible fields
    const grid = document.querySelectorAll(`.field[data-grid="${gridIndex}"]`);
    var success = false;

    while (success === false) {

        success = true;

        const emptyField = document.querySelector('.field.isEmpty[data-grid="${gridIndex}"]');

        for (var i = 0; i < 9; i++) {

            //check single field
            field_getIndex(grid[i]);
            field_getAllValues();
            field_getAllPossibleValues(); //returns => field_PossibleValues

            if (field_PossibleValues.length !== 0) {

                random = Math.floor(Math.random() * field_PossibleValues.length);

                const remove = grid_PossibleValues.indexOf(random);
                removeMe = field_PossibleValues.splice(remove, 1);

                grid[i].value = removeMe;
                grid[i].classList.remove('isEmpty');
            }
            else {
                console.log("throw error");
                success = false;
                grid.forEach(function (e) {
                    field_resetField(e);
                })
            }
        }
    }

}

function create_fillOneRandomField() {

    const emptyField = document.querySelectorAll('.field.isEmpty');

    if (emptyField.length !== 0) {

        randomEmptyField = Math.floor(Math.random() * emptyField.length);

        //check single field
        field_getIndex(emptyField[randomEmptyField]);
        field_getAllValues();
        field_getAllPossibleValues(); //returns => field_PossibleValues

        if (field_PossibleValues.length > 0) {

            randomNumber = Math.floor(Math.random() * field_PossibleValues.length);

            const remove = grid_PossibleValues.indexOf(randomNumber);
            removeMe = field_PossibleValues.splice(remove, 1);

            emptyField[randomEmptyField].value = removeMe;
            emptyField[randomEmptyField].classList.remove('isEmpty');

        }
        else {
            console.log("throw error");
            success = false;
        }
    }

}