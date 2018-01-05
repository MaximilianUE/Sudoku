/**
 * this section covers the grid creation
 **/

var random;

var deathClock = 0;

function createGame() {

    hardReset();

    create_fillInGrid(1);
    create_fillInGrid(2);
    create_fillInGrid(3);
    create_fillInGrid(4);
    create_fillInGrid(5);
    create_fillInGrid(6);
    create_fillInGrid(7);

    create_checkIfSolveable();
}

function create_emptySomeFields(amount) {

    for (var i = 0; i < amount; i++) {
        create_deleteOneRandomField();
    }
}

//check if solvable
function create_checkIfSolveable() {
    resetGame();
    solveGame();
    deathClock++;

     console.log(solved);

    checkIfSolvedIsDone();

        if (solved === true) {
            create_resetAllFields();
            create_emptySomeFields(50);
            feedback.innerText = "Start game";
        }

        else if (deathClock > 1000) {
            deathClock = 0;
            hardReset();
        }

        else {
            createGame();
        }

}

function create_fillInGrid(gridIndex) {

    //select all possible fields
    const grid = document.querySelectorAll(`.field[data-grid="${gridIndex}"]`);
    var success = false;

    var timeUnitlReset = 0;

    while (success === false) {

        success = true;

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
        }

        const emptyField = document.querySelector(`.field.isEmpty[data-grid="${gridIndex}"]`);

        if (emptyField !== null) {
            success = false;
            grid.forEach( function (e) {
                field_resetField(e);
            });
        }

        timeUnitlReset++;

        if (timeUnitlReset > 30) {
            hardReset();
            break;
        }

    }

}

function create_deleteOneRandomField() {

    const field = document.querySelectorAll('.field:not(.wasEmpty)');

    //choose random field
    randomField = Math.floor(Math.random() * field.length);

    //if field is not empty

        value = field[randomField].value;

        field[randomField].value = "";


        if ( create_checkIfSolvable(field[randomField]) ) {
            field[randomField].classList.add('wasEmpty');
            field[randomField].disabled = false;
        }
        else {
            field[randomField].value = value;
        }
}

function create_checkIfSolvable(field) {
    field_getIndex(field);
    field_getAllValues();
    field_getAllPossibleValues(); //returns => field_PossibleValues
    return (field_PossibleValues.length === 1);
}

function create_resetAllFields() {

    const field = document.querySelectorAll('.field');

    field.forEach( function (e) {
        e.classList.remove('wasEmpty');
        e.classList.remove('incorrect', 'correct');
        e.disabled = true;
    });
}
