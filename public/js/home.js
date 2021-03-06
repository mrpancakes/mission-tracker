const addAgentBtn = document.querySelector('#add-agent-btn');
const abortBtn = document.querySelector('#abort-create-agent');
const fieldAgentsHeadline = document.querySelector('#field-agents-headline');
const addAgentHeadline = document.querySelector('#add-agent-headline');
const fieldAgentCards = document.querySelector('#field-agent-cards');
const newAgentForm = document.querySelector('#add-agent-form');
const activeAgents = document.querySelectorAll('.Active');
const inactiveAgents = document.querySelectorAll('.Inactive');
const resetBtn = document.querySelector('#reset-btn');
const filterSet = document.querySelector('#filter-set');
const noAgentsDiv = document.querySelector('#no-agents');
const firstAgentBtn = document.querySelector('#first-agent-btn');
const allAgentsFilter = document.querySelector('#allAgentsFilter');
const activeAgentsFilter = document.querySelector('#activeAgentsFilter');
const inactiveAgentsFilter = document.querySelector('#inactiveAgentsFilter');
const allAgentsCount = activeAgents.length + inactiveAgents.length;

allAgentsFilter.textContent = `All (${allAgentsCount})`;
activeAgentsFilter.textContent = `Active (${activeAgents.length})`;
inactiveAgentsFilter.textContent = `Inactive (${inactiveAgents.length})`;

const createNewAgent = () => {
    // Hiding elements when user clicks to the Add Agent form
    fieldAgentCards.setAttribute('class', 'hide');
    addAgentBtn.setAttribute('class', 'hide');
    fieldAgentsHeadline.setAttribute('class', 'hide');
    filterSet.setAttribute('class', 'hide');
    noAgentsDiv.setAttribute('class', 'hide');

    // Showing the Add Agent form, headline, and abort button
    addAgentHeadline.setAttribute('class', '')
    abortBtn.setAttribute('class', 'fas fa-times');
    newAgentForm.setAttribute('class', 'm-auto mb-4 mt-4');
};

if (!allAgentsCount) {
    noAgentsDiv.setAttribute('class', 'detail-view p-5 text-center');
    addAgentBtn.setAttribute('class', 'hide');
};

addAgentBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createNewAgent();
});

firstAgentBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createNewAgent();
});


abortBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // When a user aborts out of the Add Agent form, show the main home elements
    fieldAgentCards.setAttribute('class', 'row d-flex justify-content-center');
    addAgentBtn.setAttribute('class', 'fas fa-plus-square');
    fieldAgentsHeadline.setAttribute('class', '');
    filterSet.setAttribute('class', 'd-flex justify-content-center mb-5');

    // Hide the Add Agent form elements
    addAgentHeadline.setAttribute('class', 'hide')
    abortBtn.setAttribute('class', 'hide');
    newAgentForm.setAttribute('class', 'hide');

});

document.addEventListener('click', (event) => {
    event.preventDefault();
    let userChoice;

    // Assign the event target value to userChoice only if they meet one of these three IDs
    if (event.target.id == 'allAgentsFilter' || event.target.id == 'activeAgentsFilter' || event.target.id == 'inactiveAgentsFilter') {
        userChoice = event.target.id;
    };

    // Filtering to only active agents
    if (userChoice === 'activeAgentsFilter') {
        for (let i = 0; i < inactiveAgents.length; i++) {
            inactiveAgents[i].setAttribute('class', 'hide');
        };

        for (let i = 0; i < activeAgents.length; i++) {
            activeAgents[i].setAttribute('class', 'Active col-12 col-md-6 col-lg-3 mb-5');
        };

        activeAgentsFilter.setAttribute('class', 'm-4 filter border-bottom border-2');
        inactiveAgentsFilter.setAttribute('class', 'm-4 filter');
        allAgentsFilter.setAttribute('class', 'm-4 filter');
    };

    // Filtering to only inactive agents
    if (userChoice === 'inactiveAgentsFilter') {

        for (let i = 0; i < activeAgents.length; i++) {
            activeAgents[i].setAttribute('class', 'hide');
        };

        for (let i = 0; i < inactiveAgents.length; i++) {
            inactiveAgents[i].setAttribute('class', 'Inactive col-12 col-md-6 col-lg-3 mb-5');
        };

        activeAgentsFilter.setAttribute('class', 'm-4 filter');
        inactiveAgentsFilter.setAttribute('class', 'm-4 filter border-bottom border-2');
        allAgentsFilter.setAttribute('class', 'm-4 filter');
    };

    // Clears filters to show all agents
    if (userChoice === 'allAgentsFilter') {

        for (let i = 0; i < activeAgents.length; i++) {
            activeAgents[i].setAttribute('class', 'Active col-12 col-md-6 col-lg-3 mb-5');
        };

        for (let i = 0; i < inactiveAgents.length; i++) {
            inactiveAgents[i].setAttribute('class', 'Inactive col-12 col-md-6 col-lg-3 mb-5');
        };

        activeAgentsFilter.setAttribute('class', 'm-4 filter');
        inactiveAgentsFilter.setAttribute('class', 'm-4 filter');
        allAgentsFilter.setAttribute('class', 'm-4 filter border-bottom border-2');
    };
});

