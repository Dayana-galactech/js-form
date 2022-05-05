function allLetter(inputtxt) {
    var letters = /(.*[a-z]){2}/;
    if (inputtxt.value.match(letters)) {
        return true;
    }
    else {
        var node = document.getElementById('namev');
        node.style.display = 'flex';
    }

}
function checkEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
        var node = document.getElementById('emailv');
        node.style.display = 'flex';
    }
    else{
        return true;
    }
}

function checkPhone(phone) {
    var empty = /^\s*$/;
    var charc = /[a-zA-Z]/;
    if ((phone.value.match(empty) || []).length > 0 || (phone.value.match(charc))) {
        var node = document.getElementById('phonev');
        node.style.display = 'flex';
    }
    else {
        return true;
    }
}
