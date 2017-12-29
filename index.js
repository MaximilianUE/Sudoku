
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
    console.log("-----------------------");
    console.log("result");
    console.log(columns_PossibleValues);
    console.log("-----------------------");
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


function columns_GetOnePossibleValue() {

    var column_PossibleValues = [1,2,3,4,5,6,7,8,9];

    for (t = 1; t <= 9; t++) {

        if (columns_GivenValues[i][0].includes(t)) {

            const remove = column_PossibleValues.indexOf(t);
            if (remove !== -1) {
                column_PossibleValues.splice(remove, 1);
            }


            /*if (columns_GivenValues[i][0].includes(t) === true) {
                /*
                const remove = column_PossibleValues.indexOf(t);

                if (remove !== -1) {
                    column_PossibleValues.splice(remove, 1);
                }

            }
            */
        }
    }
    column_PossibleValues.sort();
    columns_PossibleValues[i].push(column_PossibleValues);
}
