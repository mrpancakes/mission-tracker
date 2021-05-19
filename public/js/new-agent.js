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
        location.reload();
    } else {
        alert(response.statusText);
    }
});
