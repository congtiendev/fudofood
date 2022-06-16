const contact_name = document.querySelector("#contact-name");
const contact_name_error = document.querySelector("#contact-name-error");
const contact_subject = document.querySelector("#contact-subject");
const contact_subject_error = document.querySelector("#contact-subject-error");
const contact_email = document.querySelector("#contact-email");
const contact_email_error = document.querySelector("#contact-email-error");
const contact_select = document.querySelector("#contact-select");
const contact_select_error = document.querySelector("#contact-select-error");
const contact_message = document.querySelector(".form-message");
const contact_info = document.querySelector(".form__input-info");


function checkContact(event) {
    event.preventDefault();
    if (contact_name.value.length == 0 || contact_name.value.length > 50) {
        contact_name_error.innerHTML = 'Họ và tên không được để trống !';
        contact_name.style.border = '1px solid red';

        contact_name.focus();
        flag = false;
    } else {
        contact_name_error.innerHTML = '';
        contact_name.style.border = '1px solid #ccc';
    }
    if (contact_subject.value.length == 0) {
        contact_subject_error.innerHTML = 'Tiêu đề không được để trống';
        contact_subject.style.border = '1px solid red';
        contact_message.style.marginTop = '26rem';
        contact_info.style.marginTop = '20px';
        contact_subject.focus();
        flag = false;
    } else {
        contact_subject_error.innerHTML = '';
        contact_subject.style.border = '1px solid #ccc';
    }
    if (contact_email.value.length == 0 || contact_email.value.length > 50) {
        contact_email_error.innerHTML = 'Email không được để trống';
        contact_email.style.border = '1px solid red';
        flag = false;
    } else {
        contact_email_error.innerHTML = '';
        contact_email.style.border = '1px solid #ccc';
    }
    if (contact_select.value == '0') {
        contact_select_error.innerHTML = 'Vui lòng chọn chủ đề !';
        contact_select.style.border = '1px solid red';
        flag = false;
    } else {
        contact_select_error.innerHTML = '';
        contact_select.style.border = '1px solid #ccc';
    }

}
const btn_contact = document.querySelector('.form__submit-btn');
btn_contact.addEventListener('click', checkContact);