const agentDetailForm = document.querySelector('#agent-form-section');
const terminateBtn = document.querySelector('#terminate-initiate-btn');
const nevermindBtn = document.querySelector('#nevermind-btn');
const confirmWindow = document.querySelector('#delete-confirm');
const agentHeadline = document.querySelector('#agent-name');

terminateBtn.addEventListener('click', (event) => {
    event.preventDefault();

    agentDetailForm.setAttribute('class', 'hide');
    agentHeadline.setAttribute('class', 'hide');

    confirmWindow.setAttribute('class', 'text-center');
    
})