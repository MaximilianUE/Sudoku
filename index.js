
/**
 A   B   C
 --- --- ---
 D   E   F
 --- --- ---
 G   H   I
**/
var gridA = [1,2,3,4,5,6,7,8,9];
var gridB = [1,2,3,4,5,6,7,8,9];
var gridC = [1,2,3,4,5,6,7,8,9];
var gridD = [1,2,3,4,5,6,7,8,9];
var gridE = [1,2,3,4,5,6,7,8,9];
var gridF = [1,2,3,4,5,6,7,8,9];
var gridG = [1,2,3,4,5,6,7,8,9];
var gridH = [1,2,3,4,5,6,7,8,9];
var gridI = [1,2,3,4,5,6,7,8,9];

var gridBox = [gridA, gridB, gridC, gridD, gridE, gridF, gridG, gridH, gridI];

function main() {

    givenValues = [
        [],[],[],
        [],[],[],
        [],[],[]
    ];
    possibleValues = [];
    //getAllColumnValues();
    getAllColumnValues();
    console.log('givenValues:');
    console.log(givenValues);
}

function getAllColumnValues() {
    const row = document.querySelectorAll('.row');
    /*
    row.forEach(function(row) {
        getOneColumnValue(row);
    });
    */
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
