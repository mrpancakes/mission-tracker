const first = document.querySelector('#new-agent-first');
const last = document.querySelector('#new-agent-last');
const city = document.querySelector('#new-agent-city');
const gender = document.querySelector('#new-agent-gender');
const specialties = document.querySelector('#new-agent-skills');
const code_name = document.querySelector('#new-agent-codename');
const agent_status = document.querySelector('#new-agent-status');
const agentId = document.querySelector('#agent-id').getAttribute('data-id');
const updateBtn = document.querySelector('#update-btn');
const alertMsg = document.querySelector('#success-alert');

updateBtn.addEventListener('click', async (event) => {
    event.preventDefault();

//add agent front end js, working with home.handlebars


const response = await fetch(`/api/agents/${agentId}`, {
    method: 'PUT',
    body: JSON.stringify({
        code_name: code_name.value.trim(),
        first: first.value.trim(),
        last: last.value.trim(),
        location: city.value.trim(),
        gender: gender.options[gender.selectedIndex].text,
        specialties: specialties.value.trim(),
        status: agent_status.options[agent_status.selectedIndex].text
    }),
    headers: {
        'Content-Type': 'application/json'
    },
});
if (response.ok) {
    
    alertMsg.setAttribute('class', 'alert alert-success');

    setTimeout(() => {
        alertMsg.setAttribute('class', 'hide');
        document.location.replace('/agents/' + agentId)
    }, 2000)

} else {
    alert(response.statusText);
}
});
