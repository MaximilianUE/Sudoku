/**
 * this section covers the main functions
 **/

var gridIndex;
var rowIndex;
var columnIndex;

var solvedIsDone;
var solved;
var unsolvedHasChanged = false;

let field_PossibleValues = [];

const feedback = document.getElementById('feedback');

/** check all fields until the grid is solvedIsDone **/
function solveGame() {

    hardReset()

    const field = document.querySelectorAll('.field');

    //while not solvedIsDone
    while (!solvedIsDone) {

        //if runs completely without interruption end the program.
        feedback.innerText = "running";

        for (var i = 0; i < field.length; i++) {

            //is field not set?
            if (field[i].value === "") {

                field[i].classList.add('isEmpty');
                field[i].classList.add('wasEmpty');

                field_getIndex(field[i]);

                //get possible Values
                field_getAllValues();

                //add to field_possibleValues
                field_getAllPossibleValues();
                field_checkIfSolvable(field[i]);

            }
        }

        checkIfSolvedIsDone();

    }

}

function checkIfSolvedIsDone() {

    const isEmpty = document.querySelector('.field.isEmpty');

    if (unsolvedHasChanged) {
        solvedIsDone = false;
        unsolvedHasChanged = false;
        feedback.innerText = "continue";
    }

    else if (isEmpty === null) {
        solvedIsDone = true;
        solved = true;
        feedback.innerText = "solved";
    }

    else {
        solvedIsDone = true;
        solved = false;
        feedback.innerText = "Error; Not solvable";
    }

}

function resetGame() {
    solvedIsDone = false;
    solved = false;

    feedback.innerText = "Feedback";

    var clear = document.querySelectorAll('.wasEmpty');

    clear.forEach( function (e) {
        e.value = "";
        e.style.backgroundColor = "white";
        e.classList.remove('wasEmpty');
    })

}

function hardReset() {
    solvedIsDone = false;
    solved = false;

    feedback.innerText = "Feedback";

    var clear = document.querySelectorAll('.field');

    clear.forEach( function (e) {
        e.value = "";
        e.style.backgroundColor = "white";
        e.classList.remove('wasEmpty');
        e.classList.add('isEmpty');
    })

}