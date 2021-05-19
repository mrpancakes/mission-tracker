const user_name = document.querySelector('#signup-username');
const email = document.querySelector('#signup-email');
const agency_name = document.querySelector('#signup-agency');
const password = document.querySelector('#signup-password');
const registerBtn = document.querySelector('#register-btn');

registerBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const response = await fetch('api/user', {
        method: 'POST',
        body: JSON.stringify({
            user_name: user_name.value.trim(),
            email: email.value.trim(),
            agency_name: agency_name.value.trim(),
            password: password.value.trim(),
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        window.location.replace('/home');
    } else {
        alert(response.statusText);
    };
});
