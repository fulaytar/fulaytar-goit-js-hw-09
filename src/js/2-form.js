const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
//змінні для уведених даних
let email = '';
let message = '';

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
    email = event.currentTarget.elements.email.value.trim();
    message = event.currentTarget.elements.message.value.trim();
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
//Перевірка повідомлення
    if (message === "") {
        return alert("Please enter a message")
    }
//Отримання та реєстрація даних форми
    const formData = {
    email: email,
    message: message,
    };
//Виведення результату
    console.log(formData);
    localStorage.clear();
    form.reset();
})
