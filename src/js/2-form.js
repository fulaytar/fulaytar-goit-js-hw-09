const form = document.querySelector('.feedback-form');

function checkInput() {
    let email = form.email.value.trim();
    let message = form.message.value.trim();
    const checkForm = {};
    if (email!=="") {
    checkForm.email = email;
    }
    if (message!=="") {
    checkForm.message = message;
    }
    return checkForm;

}

/* form.addEventListener("input", getInfoForForm);
function getInfoForForm(event) {
    event.preventDefault();
    const infoInput = checkInput();
    const dataInfoInput = JSON.stringify(infoInput);
    localStorage.setItem('feedback-form-state', dataInfoInput);
    const getDataInfoLocal = localStorage.getItem('feedback-form-state');
    console.log(getDataInfoLocal)
    if (getDataInfoLocal) {
        const infoLocal = JSON.parse(getDataInfoLocal);
        form.email.value = infoLocal.email;
        form.message.value = infoLocal.message;
    }
    
    
} */