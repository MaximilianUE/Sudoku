function testMe() {

    arr = [];
    getOneColumnValue();
    //getAllColumnValues();

}function getOneColumnValue(row) {
    const row = document.querySelector('.row');
    const column = row.querySelectorAll('.column');

    column.forEach(function(e) {
        arr.push(e.innerHTML.trim());
    });
    console.log(arr);
}