
function main() {

    givenValues = [
        [],[],[],
        [],[],[],
        [],[],[]
    ];
    
    possibleValues = [
        [],[],[],
        [],[],[],
        [],[],[]
    ];

    getAllColumnValues();

    console.log('givenValues:');
    console.log(givenValues);
}

function getAllColumnValues() {
    const row = document.querySelectorAll('.row');

    for(i = 0; i < row.length; i++) {
        getOneColumnValue(row[i])
    }
}

function getOneColumnValue(row) {
    const column = row.querySelectorAll('.column');
    var theseGivenValues = [];

    column.forEach(function(e) {
        theseGivenValues.push(e.innerHTML.trim());
    });
    theseGivenValues.sort();
    givenValues[i].push(theseGivenValues);
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
    thesePossibleValues.sort();
    possibleValues.push(thesePossibleValues);
}
