const deleteBtn = document.querySelector('#terminate-confirm-btn');
const deleteAgentId = document.querySelector('#agent-id').getAttribute('data-id');

deleteBtn.addEventListener('click', async (event) => {
    event.preventDefault()
      const response = await fetch(`/api/agents/${deleteAgentId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        document.location.replace('/home');
        alert("Agent Deleted");
      } else {
        alert('Failed to delete post');
      }
  });
  