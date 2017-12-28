function testMe() {

    arr = [];
    getAllColumnValues();
    console.log(arr);
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
        arr.push(e.innerHTML.trim());
    });
