
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

function getOneColumnValue() {
//function getOneColumnValue(row) {
    const row = document.querySelector('.row');
    const column = row.querySelectorAll('.column');

    column.forEach(function(e) {
        givenValues.push(+e.innerHTML.trim());
    });

    givenValues.sort();
}


function getOneColumnPossibleValues() {

    console.log('givenValues:'+ givenValues);

    var possibleValues = [1,2,3,7,22];

    /*
    possibleValues = possibleValues.filter( function( el ) {
        return givenValues.indexOf( el ) < 0;
    } );
    */

    for (i = 1; i <= 9; i++) {
        if (givenValues.includes(i) === false) {
            const remove = possibleValues.indexOf(i);
            console.log(remove);
            possibleValues.splice(remove);
        }
    }

    console.log("possibleValues:" + possibleValues);
    return possibleValues;
}