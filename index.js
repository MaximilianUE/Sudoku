
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

function testMe() {

    givenValues = [];
    possibleValues = [
        [1,2,3,4,5,6,7,8,9]
    ];
    //getAllColumnValues();
    getOneColumnValue();
    console.log('givenValues:'+ givenValues);
    getOneColumnPossibleValues();
    console.log("possibleValues:" + possibleValues);
}

function getAllColumnValues() {
    const row = document.querySelectorAll('.row');
    row.forEach(function(row) {
        getOneColumnValue(row);
    });
}

function getOneColumnValue() {
//function getOneColumnValue(row) {
    const row = document.querySelector('.row');
    const column = row.querySelectorAll('.column');

    column.forEach(function(e) {
        givenValues.push(+e.innerHTML.trim());
    });
    return givenValues.sort();
}

function getOneColumnPossibleValues() {

    thesePossibleValues = possibleValues[0];

    for (i = 1; i <= 9; i++) {
        if (givenValues.includes(i) === true) {
            const remove = thesePossibleValues.indexOf(i);
            
            if (remove !== -1) {
                thesePossibleValues.splice(remove, 1);
            }
        }
    }
    return thesePossibleValues.sort();
}
