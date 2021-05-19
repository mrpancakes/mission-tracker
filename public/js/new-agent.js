//add agent front end js, working with home.handlebars
const first = document.querySelector('#new-agent-first');
const last = document.querySelector('#new-agent-last');
const city = document.querySelector('#new-agent-city');
const gender = document.querySelector('#new-agent-gender');
const specialties = document.querySelector('#new-agent-skills');
const code_name = document.querySelector('#new-agent-codename');
const agent_status = document.querySelector('#new-agent-status');
const newAgentBtn = document.querySelector('#new-agent-btn');


newAgentBtn.addEventListener('click', async (event) => {
    
    event.preventDefault();

const response = await fetch('api/agents', {
    method: 'POST',
    body: JSON.stringify({
        code_name: code_name.value,
        first: first.value,
        last: last.value,
        location: city.value,
        gender: gender.value,
        specialties: specialties.value,
        status: agent_status.value
    }),
    headers: {
        'Content-Type': 'application/json'
    },
});
if (response.ok) {
    document.location.replace('/home/')
} else {
    alert(response.statusText);
}
});


//examples i was looking at had click event functions at bottom