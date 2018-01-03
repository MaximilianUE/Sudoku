
var create_PossibleValues = [1,2,3,4,5,6,7,8,9];
var random;

const field = document.querySelectorAll('.field');

var solveable = false;

function create() {

    var gridIndex = 1;

    while ( create_PossibleValues.length  > 0 ) {

        const grid = document.querySelectorAll(`.field.isEmpty[data-grid="${gridIndex}"]`);
        random = Math.floor(Math.random() * create_PossibleValues.length);
        grid[random].value = create_PossibleValues.shift();
        grid[random].classList.remove('isEmpty');

    }

    gridIndex = 2;

    while (solveable === false) {

        fillField(gridIndex);
        canItBeSolved();
    }

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
    console.log(gridEmpty.length);

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