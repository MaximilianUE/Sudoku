/**
 * this section covers the main function
 **/

var gridIndex;
var rowIndex;
var columnIndex;

function main() {

    getFields();
    field_getIndex();

    grid_GetAllValues(gridIndex);
    console.log("-----------------------");
    console.log("result grid");
    console.log(grid_PossibleValues);
    console.log("-----------------------");

    row_GetAllValues(rowIndex);
    console.log("-----------------------");
    console.log("result row");
    console.log(row_PossibleValues);
    console.log("-----------------------");

    column_GetAllValues(columnIndex);
    console.log("-----------------------");
    console.log("result column");
    console.log(column_PossibleValues);
    console.log("-----------------------");

}

function field_getIndex() {

    //input [var btwn 1 and grid-size(9)]
    gridIndex = 1;
    rowIndex = 1;
    columnIndex = 1;

}
