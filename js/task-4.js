
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();

    const { email: userEmail, password: userPassword } = evt.currentTarget.elements;

    if (!userEmail.value.trim() || !userPassword.value.trim())
        alert('All form fields must be filled in');

    else {
        const data = {
            email: userEmail.value.trim(),
            password: userPassword.value.trim(),
        };
        console.log(data);
        formEl.reset();
    }
};