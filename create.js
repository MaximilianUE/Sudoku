
var create_PossibleValues = [1,2,3,4,5,6,7,8,9];

const field = document.querySelectorAll('.field');
function create() {

    var randomValue;

    var gridIndex = 1;

    while ( create_PossibleValues.length  > 0 ) {

        const grid = document.querySelectorAll(`.field.isEmpty[data-grid="${gridIndex}"]`);
        random = Math.floor(Math.random() * create_PossibleValues.length);
        grid[random].value = create_PossibleValues.shift();
        grid[random].classList.remove('isEmpty');

    }}
}