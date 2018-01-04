function create_fillOneRandomField() {

    const emptyField = document.querySelectorAll('.field.isEmpty');

    if (emptyField.length !== 0) {

        randomEmptyField = Math.floor(Math.random() * emptyField.length);

        //check single field
        field_getIndex(emptyField[randomEmptyField]);
        field_getAllValues();
        field_getAllPossibleValues(); //returns => field_PossibleValues

        if (field_PossibleValues.length > 0) {

            randomNumber = Math.floor(Math.random() * field_PossibleValues.length);

            const remove = grid_PossibleValues.indexOf(randomNumber);
            removeMe = field_PossibleValues.splice(remove, 1);

            emptyField[randomEmptyField].value = removeMe;
            emptyField[randomEmptyField].classList.remove('isEmpty');

        }
        else {
            console.log("throw error");
            success = false;
        }
    }

}