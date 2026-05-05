const inputEmail = document.getElementById('email');

inputEmail.addEventListener('blur', () => {
    if (inputEmail.value.trim() === "") {
        inputEmail.classList.add('error');
    } else {
        inputEmail.classList.remove('error');
    }
});