
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
    //getAllColumnValues();
    getOneColumnValue();
    getOneColumnPossibleValues();
}

function getAllColumnValues() {
    const row = document.querySelectorAll('.row');
    row.forEach(function(row) {
        getOneColumnValue(row);
    });
}

function getOneColumnValue(row) {
    const column = row.querySelectorAll('.column');

    column.forEach(function(e) {
        givenValues.push(+e.innerHTML.trim());
    });