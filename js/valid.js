window.onload = () => {
    document.querySelector(".input2").addEventListener('click', (event) => {
        event.preventDefault();

        let firstName = document.querySelector('input[name="fname"]').value;
        let email = document.querySelector('input[name="email"]').value;
        let phone = document.querySelector('input[name="phone"]').value;

        console.log([firstName, email, phone]);

        let isNameValid = isValidName(firstName);
        let isEmailValid = isValidEmail(email);
        let isPhoneValid = isValidPhone(phone);

        if (!isNameValid) {
            document.querySelector("#errorMessage").style.display='block';
            document.querySelector("#errorMessage").innerHTML = "Invalid Name"
        }
        else if(!isEmailValid){
            document.querySelector("#errorMessage").style.display='block';
            document.querySelector("#errorMessage").innerHTML = "Invalid Email"
        }
        else if(!isPhoneValid){
            document.querySelector("#errorMessage").style.display='block';
            document.querySelector("#errorMessage").innerHTML = "Invalid Phone number"
        }
        else
        document.querySelector("#errorMessage").style.display='none';

        console.log([isNameValid, isEmailValid, isPhoneValid]);
        // checkPhone(document.form1.phone);
    })
}

function isValidName(name) {
    return name.length > 2;
}
function isValidEmail(email) {
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return filter.test(email)
}

function isValidPhone(phone) {
    let charc = /[a-zA-Z]/;
    return phone.length > 0 && !charc.test(parseInt(phone))
}
