const deleteBtn = document.querySelector('#terminate-confirm-btn');
const deleteAgentId = document.querySelector('#agent-id').getAttribute('data-id');
const deleteConfirmDiv = document.querySelector('#delete-confirm');
const agentCodename = document.querySelector('#new-agent-codename').value;
let countdownDiv = document.createElement("div");
let countdownDivText

const countdownText = '3...,2...,1..., * Self Destructing *';
const myArray = countdownText.split(",");
let loopTimer;

function countdown() {
  if (myArray.length > 0) {
    countdownDiv.innerHTML += myArray.shift();
    deleteConfirmDiv.appendChild(countdownDiv);
  } else {
    clearTimeout(loopTimer);
    return false;
  }
  loopTimer = setTimeout('countdown()', 950);
};


deleteBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/agents/${deleteAgentId}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    deleteConfirmDiv.innerHTML = (`<div>${agentCodename} has been terminated.</div><br></br>`);
    countdown();

    setTimeout(() => {

      document.location.replace('/home');
    }, 4200)

  } else {
    alert('Failed to delete post');
  }
});
