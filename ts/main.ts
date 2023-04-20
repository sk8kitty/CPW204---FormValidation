window.onload = function() {
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void {
    isTextPresent("first-name", "First name is required.");
    isTextPresent("last-name", "Last name is required.");
}

/**
 * Returns true if the textbox with the given ID has text within it.
 * @param id The ID of the <input type="text"> element being validated.
 * @param errMsg The message to display in the sibling span element of the given textbox.
 */
function isTextPresent(id:string, errMsg:string):boolean {
    // i decided to leave this as is instead of creating a separate function to handle error messages because it feels simpler
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    let errSpan = <HTMLElement>txtBox.nextElementSibling;

    if (txtBoxValue == "") {
        errSpan.innerHTML = errMsg;
        return false;
    }
    else {
        errSpan.innerHTML = "*";
    }

    return true;
}