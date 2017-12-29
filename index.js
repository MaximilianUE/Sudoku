
function main() {

    columns_GivenValues = [
        [],[],[],
        [],[],[],
        [],[],[]
    ];

    columns_PossibleValues = [
        [],[],[],
        [],[],[],
        [],[],[]
    ];

    columns_GetAllValues();

    console.log(columns_GivenValues);
}

function columns_GetAllValues() {
    const row = document.querySelectorAll('.row');

    for(i = 0; i < row.length; i++) {
        columns_GetOneColumnValue(row[i])
    }
}

function columns_GetOneColumnValue(row) {
    const column = row.querySelectorAll('.column');
    var column_GivenValues = [];

    column.forEach(function(e) {
        column_GivenValues.push(e.innerHTML.trim());
    });
    column_GivenValues.sort();
    columns_GivenValues[i].push(column_GivenValues);
}


function getOneColumnPossibleValues() {

    thesePossibleValues = [1,2,3,4,5,6,7,8,9];

    for (i = 1; i <= 9; i++) {
        if (givenValues.includes(i) === true) {
            const remove = thesePossibleValues.indexOf(i);
            
            if (remove !== -1) {
                thesePossibleValues.splice(remove, 1);
            }
        }
    }
    column_PossibleValues.sort();
    columns_PossibleValues[i].push(column_PossibleValues);
}
