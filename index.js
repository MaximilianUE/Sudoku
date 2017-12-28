function testMe() {

    arr = [];
    getOneColumnValue();
    //getAllColumnValues();

}

function getAllColumnValues() {
    const row = document.querySelectorAll('.row');
    row.forEach(function(row) {
        getOneColumnValue(row);
    });
}

function getOneColumnValue(row) {
    const row = document.querySelector('.row');
    const column = row.querySelectorAll('.column');

    column.forEach(function(e) {
        arr.push(e.innerHTML.trim());
    });
    console.log(arr);
}
