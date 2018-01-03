
var create_PossibleValues = [1,2,3,4,5,6,7,8,9];

const field = document.querySelectorAll('.field');

var loop = 1;

function create() {

    var randomValue;

    var gridIndex = 1;

    while ( create_PossibleValues.length  > 0 ) {

        const grid = document.querySelectorAll(`.field.isEmpty[data-grid="${gridIndex}"]`);
        random = Math.floor(Math.random() * create_PossibleValues.length);
        grid[random].value = create_PossibleValues.shift();
        grid[random].classList.remove('isEmpty');

    }

    gridIndex = 2;

    create_PossibleValues = [1,2,3,4,5,6,7,8,9];

    while ( create_PossibleValues.length  > 0 && loop < 500) {

        //select all possible fields
        grid = document.querySelectorAll(`.field.isEmpty[data-grid="${gridIndex}"]`);

        //choose a possible random field
        random = Math.floor(Math.random() * grid.length);

        console.log(grid.length);

        //get all possible values for this field
        rowIndex = grid[random].getAttribute('data-row');
        row_GetAllValues(rowIndex);

        shift = create_PossibleValues.shift();
        const test = row_PossibleValues.indexOf(shift);
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