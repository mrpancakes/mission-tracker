const addAgentBtn = document.querySelector('#add-agent-btn');
const abortBtn = document.querySelector('#abort-create-agent');
const fieldAgentsHeadline = document.querySelector('#field-agents-headline');
const addAgentHeadline = document.querySelector('#add-agent-headline');
const fieldAgentCards = document.querySelector('#field-agent-cards');
const newAgentForm = document.querySelector('#add-agent-form');
const activeAgents = document.querySelectorAll('.active');
const inactiveAgents = document.querySelectorAll('.inactive');
const resetBtn = document.querySelector('#reset-btn');
const filterSet = document.querySelector('#filter-set')

const allAgentsFilter = document.querySelector('#allAgentsFilter');
const activeAgentsFilter = document.querySelector('#activeAgentsFilter');
const inactiveAgentsFilter = document.querySelector('#inactiveAgentsFilter');

const allAgentsCount = activeAgents.length + inactiveAgents.length

allAgentsFilter.textContent = `All (${allAgentsCount})`;
activeAgentsFilter.textContent = `Active (${activeAgents.length})`;
inactiveAgentsFilter.textContent = `Inactive (${inactiveAgents.length})`;

document.addEventListener('click', (event) => {
    event.preventDefault();

    if(event.target.id == 'allAgentsFilter' || event.target.id == 'activeAgentsFilter' || event.target.id == 'inactiveAgentsFilter'){
        console.log(event.target.id);
    }

});


addAgentBtn.addEventListener('click', (event) => {
    event.preventDefault();

    fieldAgentCards.setAttribute('class', 'hide');
    addAgentBtn.setAttribute('class', 'hide');
    fieldAgentsHeadline.setAttribute('class', 'hide');
    filterSet.setAttribute('class', 'hide');

    addAgentHeadline.setAttribute('class', '')
    abortBtn.setAttribute('class', 'fas fa-times');
    newAgentForm.setAttribute('class', 'm-auto mb-4 mt-4');

});

abortBtn.addEventListener('click', (event) => {
    event.preventDefault();

    fieldAgentCards.setAttribute('class', 'row d-flex justify-content-center');
    addAgentBtn.setAttribute('class', 'fas fa-plus-square');
    fieldAgentsHeadline.setAttribute('class', '');
    filterSet.setAttribute('class', 'd-flex justify-content-center mb-5');

    addAgentHeadline.setAttribute('class', 'hide')
    abortBtn.setAttribute('class', 'hide');
    newAgentForm.setAttribute('class', 'hide');

});

document.addEventListener('click', (event) => {
    
    event.preventDefault();
    let userChoice;

    if(event.target.id == 'allAgentsFilter' || event.target.id == 'activeAgentsFilter' || event.target.id == 'inactiveAgentsFilter'){
        userChoice = event.target.id;
    }

    if (userChoice === 'activeAgentsFilter') {
        for (let i = 0; i < inactiveAgents.length; i++) {
            inactiveAgents[i].setAttribute('class', 'col-12 col-md-6 col-lg-3 mb-5 hide');
        };

        for (let i = 0; i < activeAgents.length; i++) {
            activeAgents[i].setAttribute('class', 'col-12 col-md-6 col-lg-3 mb-5');
            activeAgentsFilter.setAttribute('class', 'm-4 filter border-bottom');
            inactiveAgentsFilter.setAttribute('class', 'm-4 filter');
            allAgentsFilter.setAttribute('class', 'm-4 filter');
        };
    };

    if (userChoice === 'inactiveAgentsFilter') {
        for (let i = 0; i < activeAgents.length; i++) {
            activeAgents[i].setAttribute('class', 'col-12 col-md-6 col-lg-3 mb-5 hide');
        };

        for (let i = 0; i < inactiveAgents.length; i++) {
            inactiveAgents[i].setAttribute('class', 'col-12 col-md-6 col-lg-3 mb-5');
            activeAgentsFilter.setAttribute('class', 'm-4 filter');
            inactiveAgentsFilter.setAttribute('class', 'm-4 filter border-bottom');
            allAgentsFilter.setAttribute('class', 'm-4 filter');
        };
    };

    if (userChoice === 'allAgentsFilter') {
        for (let i = 0; i < activeAgents.length; i++) {
            activeAgents[i].setAttribute('class', 'col-12 col-md-6 col-lg-3 mb-5');
        };

        for (let i = 0; i < inactiveAgents.length; i++) {
            inactiveAgents[i].setAttribute('class', 'col-12 col-md-6 col-lg-3 mb-5');
            activeAgentsFilter.setAttribute('class', 'm-4 filter');
            inactiveAgentsFilter.setAttribute('class', 'm-4 filter');
            allAgentsFilter.setAttribute('class', 'm-4 filter border-bottom');
        };
    };

    
});

