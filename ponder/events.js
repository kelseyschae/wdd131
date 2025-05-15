function newTask() {
    const listElement = document.querySelector('#todoList');
    const input = document.querySelector('#todo');
    const task = input.value.trim();
    if (task === '') return;
  
    listElement.innerHTML += `
      <li> ${task}
        <div>
          <span data-function="delete">❎</span>
          <span data-function="complete">✅</span>
        </div>
      </li>`;
      
    input.value = '';
  }
  
  function manageTasks(e) {
    console.log(e);
    const parent = e.target.closest("li");
    if (e.target.getAttribute("data-function") === "delete") {
      parent.remove();
    }
    if (e.target.getAttribute("data-function") === "complete") {
      parent.classList.toggle("strike");
    }
  }
  
  document.querySelector('#submitTask').addEventListener('click', newTask);
  document.querySelector('#todoList').addEventListener('click', manageTasks);
  
  // We need to attach listeners to the submit button and the list. Listen for a click call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.