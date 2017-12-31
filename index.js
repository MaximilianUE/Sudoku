
function main() {

    grid_GetAllValues();
    console.log("-----------------------");
    console.log("result grid");
    console.log(grid_PossibleValues);
    console.log("-----------------------");

    row_GetAllValues();
    console.log("-----------------------");
    console.log("result row");
    console.log(row_PossibleValues);
    console.log("-----------------------");

    column_GetAllValues();
    console.log("-----------------------");
    console.log("result column");
    console.log(column_PossibleValues);
    console.log("-----------------------");

}