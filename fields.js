
function field_getIndex(field) {

    gridIndex = field.getAttribute('data-grid');
    rowIndex = field.getAttribute('data-row');
    columnIndex = field.getAttribute('data-column');

}

function field_getAllValues() {
    grid_GetAllValues(gridIndex);
    row_GetAllValues(rowIndex);
    column_GetAllValues(columnIndex);
}

function field_getAllPossibleValues() {

    field_PossibleValues = [];

    for (var t = 1; t <= 9; t++) {

        if (grid_PossibleValues.includes(t) &&
            row_PossibleValues.includes(t) &&
            column_PossibleValues.includes(t)) {

            field_PossibleValues.push(t);
        }
    }
    return field_PossibleValues;
}


function field_checkIfSolvable(field) {

    if(field_PossibleValues.length === 1) {
        field.value = field_PossibleValues;
        field.style.backgroundColor = "lightgreen";
        field.classList.remove('isEmpty');
        unsolvedHasChanged = true;
    }
    else {
        field.style.backgroundColor = "red";
    }
}

function field_resetField(field) {
    field.value = "";
    field.style.backgroundColor = "white";
    field.classList.remove('wasEmpty');
    field.classList.add('isEmpty');
}
