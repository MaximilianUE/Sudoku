
var create_PossibleValues;
var random;

const field = document.querySelectorAll('.field');

var solveable;

function create() {

    var gridIndex = 1;

    create_PossibleValues = [1,2,3,4,5,6,7,8,9];

    while ( create_PossibleValues.length  > 0 ) {

        const grid = document.querySelectorAll(`.field.isEmpty[data-grid="${gridIndex}"]`);
        random = Math.floor(Math.random() * create_PossibleValues.length);
        grid[random].value = create_PossibleValues.shift();
        grid[random].classList.remove('isEmpty');

    }

    fillInField(2);
    fillInField(3);
    fillInField(4);
    fillInField(5);
    fillInField(7);

    solve();

    /*
    const isEmpty = document.querySelector('.field.isEmpty');

    if (isEmpty === null) {
        feedback.innerText = "start";
    }
    else {
        create_HardReset();
    }
    */

}

function fillInField(gridIndex) {
    solveable = false;
    var timeUnitlReset = 500;

    while (solveable === false && timeUnitlReset > 0) {
        fillField(gridIndex);
        canItBeSolved();
        timeUnitlReset--;
    }

    if (solveable === false) {
        console.log("hard");
        create_HardReset();
    }
}

function create_HardReset() {
    grid = document.querySelectorAll('.field');

    grid.forEach(function (e) {
        e.value = "";
        e.classList.add('isEmpty');
    });
    create();
}

function fillField(gridIndex) {

    create_PossibleValues = [1,2,3,4,5,6,7,8,9];

    var loop = 0;
    while ( create_PossibleValues.length  > 0 && loop <= 9 ) {

        //select all possible fields
        grid = document.querySelectorAll(`.field.isEmpty[data-grid="${gridIndex}"]`);

        //choose a possible random field
        random = Math.floor(Math.random() * grid.length);

        //get all possible values for this field
        field_getIndex(grid[random]);

        field_getAllValues();
        //get possible Values
        field_getAllPossibleValues();

        shift = create_PossibleValues.shift();
        const test = field_PossibleValues.indexOf(shift);

        //only if row_PossibleValues
        if (test !== -1) {
            grid[random].value = shift;
            grid[random].classList.remove('isEmpty');
        }
        else {
            create_PossibleValues.push(shift);
        }

        loop++;
    }

}

function canItBeSolved() {

    grid = document.querySelectorAll(`.field[data-grid="${gridIndex}"]`);
    gridEmpty = document.querySelectorAll(`.field.isEmpty[data-grid="${gridIndex}"]`);

    if (gridEmpty.length <= 0) {
        solveable = true;
    }
    else {
        solveable = false;
        grid.forEach(function (e) {
            e.value = "";
            e.classList.add('isEmpty');
        });
    }
}