window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    isTextPresent("first-name", "First name is required.");
    isTextPresent("last-name", "Last name is required.");
}
function isTextPresent(id, errMsg) {
    var txtBox = document.getElementById(id);
    var txtBoxValue = txtBox.value;
    var errSpan = txtBox.nextElementSibling;
    if (txtBoxValue == "") {
        errSpan.innerHTML = errMsg;
        return false;
    }
    else {
        errSpan.innerHTML = "*";
    }
    return true;
}
