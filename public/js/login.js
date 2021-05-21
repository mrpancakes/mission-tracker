const loginForm = document.querySelector('.login-form');
const successMsg = document.querySelector('#success-loader');
const loginFormSection = document.querySelector('#login-section');

const myText = '...';
const myArray = myText.split("");
let loopTimer;

function letterTicker() {
    if (myArray.length > 0) {
        document.getElementById("dots").innerHTML += myArray.shift();
    } else {
        clearTimeout(loopTimer);
        return false;
    }
    loopTimer = setTimeout('letterTicker()', 1100);
};

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
            document.location.replace('/loading');
        } else {
            alert('Failed to login. Please try again, or signup.');
            console.log(response);
        };

    };
};



loginForm.addEventListener('submit', loginFormHandler);