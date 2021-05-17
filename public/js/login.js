const loginForm = document.querySelector('.login-form');
const successMsg = document.querySelector('#success-loader');
const loginFormSection = document.querySelector('#login-section');

const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (username && password) {
        const response = await fetch('api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {

            loginFormSection.setAttribute('class', 'hide');
               successMsg.setAttribute("class", "d-flex flex-column justify-content-center align-items-center");

            setTimeout (() => {
                document.location.replace('/home');
            }, 2000)

            console.log('testing when this appears')


        } else {
            alert('Failed to login. Please try again, or signup.');
            console.log(response);
        };

    };

    console.log(username.value);
    console.log(password.value);
};



loginForm.addEventListener('submit', loginFormHandler);