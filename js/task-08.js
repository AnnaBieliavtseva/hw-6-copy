const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmitForm);

function onSubmitForm (event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if ( email === "" ||  password === "") {
        return alert("All fields must be filled in.")
    }
    
    const dataLogin = {email, password}
    console.log(dataLogin)
    loginForm.reset()
    
}
