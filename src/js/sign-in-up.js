const listAccount = [

];
const email = document.querySelector("#email");
const email_error = document.querySelector("#email-error");
const password = document.querySelector("#password");
const password_error = document.querySelector("#password-error");
const re_password = document.querySelector("#re-password");
const re_password_error = document.querySelector("#re-password-error");
const full_name = document.querySelector("#full-name");
const full_name_error = document.querySelector("#full-name-error");
//-------------------------------------------------------------------------------

const flag = true;

function checkSignIn(event) {
    event.preventDefault();
    if (email.value.length == 0 || email.value.length > 50) {
        email_error.innerHTML = 'Emai không được để trống và không được vượt quá 50 ký tự !';
        email.style.border = '1px solid red';
        flag = false;
    } else {
        email_error.innerHTML = '';
        email.style.border = '1px solid #ccc';
    }
    if (password.value.length == 0 || password.value.length < 6) {
        password_error.innerHTML = 'Mật khẩu không được để trống và phải có ít nhất 6 ký tự !';
        password.style.border = '1px solid red';
        flag = false;
    } else {
        password_error.innerHTML = '';
        password.style.border = '1px solid #ccc';
    }
}



function checkSignUp(event) {
    event.preventDefault();
    checkSignIn(event);
    if (email.value.length == 0 || email.value.length > 50) {
        email_error.innerHTML = 'Emai không được để trống và không được vượt quá 50 ký tự !';
        email.style.border = '1px solid red';
        flag = false;
    } else {
        for (let i = 0; i < listAccount.length; i++) {
            if (listAccount[i].email == email.value) {
                email_error.innerHTML = 'Email đã tồn tại !';
                email.style.border = '1px solid red';
                flag = false;
                break;
            } else {
                email_error.innerHTML = '';
                email.style.border = '1px solid #ccc';
            }
        }
    }

    if (full_name.value.length == 0 || full_name.value.length > 50) {
        full_name_error.innerHTML = 'Họ và tên không được để trống và không được vượt quá 50 ký tự !';
        full_name.style.border = '1px solid red';
        flag = false;
    } else {
        full_name_error.innerHTML = '';
        full_name.style.border = '1px solid #ccc';
    }
    if (re_password.value != password.value) {
        re_password_error.innerHTML = 'Mật khẩu không trùng khớp !';
        re_password.style.border = '1px solid red';
        flag = false;
    } else {
        re_password_error.innerHTML = '';
        re_password.style.border = '1px solid #ccc';
    }
    if (flag) {
        const account = {
            id: listAccount.length + 1,
            email: email.value,
            password: password.value,
            full_name: full_name.value
        }
        listAccount.push(account);
        localStorage.setItem('listAccount', JSON.stringify(listAccount));
        window.location.href = 'signin.html';
        alert('Đăng ký thành công !');
    }
}
const btn_signup = document.querySelector('.form__login-btn');
btn_signup.addEventListener('click', checkSignUp);
console.log(listAccount);


const contact_name = document.querySelector("#contact-name");
const contact_name_error = document.querySelector("#contact-name-error");
const contact_subject = document.querySelector("#contact-subject");
const contact_subject_error = document.querySelector("#contact-subject-error");
const contact_email = document.querySelector("#contact-email");
const contact_email_error = document.querySelector("#contact-email-error");
const contact_select = document.querySelector("#contact-select");
const contact_select_error = document.querySelector("#contact-select-error");