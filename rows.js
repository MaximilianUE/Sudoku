

rows_GivenValues = [
    [],[],[],
    [],[],[],
    [],[],[]
];

rows_PossibleValues = [
    [],[],[],
    [],[],[],
    [],[],[]
];

/**
 * this section covers the rows
 **/

function rows_GetAllValues() {
    const row = document.querySelectorAll('.row');

    for(i = 0; i < row.length; i++) {
        rows_GetOneGivenValue(row[i]);
        rows_GetOnePossibleValue();
    }
}

function rows_GetOneGivenValue(row) {
    const column = row.querySelectorAll('.column');
    var column_GivenValues = [];

    column.forEach(function(e) {
        column_GivenValues.push(+e.innerHTML.trim());
    });
    column_GivenValues.sort();
    return rows_GivenValues[i].push(column_GivenValues);
}

function rows_GetOnePossibleValue() {
    var column_PossibleValues = [1,2,3,4,5,6,7,8,9];

    for (t = 1; t <= 9; t++) {

        if (rows_GivenValues[i][0].includes(t)) {
            const remove = column_PossibleValues.indexOf(t);
            if (remove !== -1) {
                column_PossibleValues.splice(remove, 1);
            }
        }
    }
    column_PossibleValues.sort();
    return rows_PossibleValues[i].push(column_PossibleValues);
}
