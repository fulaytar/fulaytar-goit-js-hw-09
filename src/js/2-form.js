const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

// Перевірка збережених даних у localStorage
const savedState = JSON.parse(localStorage.getItem(localStorageKey));
if (savedState) {
  // Заповнення полів форми збереженими даними
  form.elements.email.value = savedState.email || '';
  form.elements.message.value = savedState.message || '';
}

form.addEventListener("input", getInfoForForm);
const getInfo = {};

function getInfoForForm(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value.trim();
    const message = event.currentTarget.elements.message.value.trim();
    if (email === "") {
        delete getInfo.email;
    }
    if (message === "") {
        delete getInfo.message;
    }
    if (email) {
        getInfo.email = email;
    }
    if (message) {
        getInfo.message = message;
    }
    localStorage.setItem(localStorageKey, JSON.stringify(getInfo));
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
//Отримання та реєстрація даних форми
    const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
    };
//Виведення результату
    console.log(formData);
    localStorage.clear();
    form.reset();
})










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